import test from 'node:test';
import assert from 'node:assert/strict';
import {wavePhase,wavefrontPhase,soundSnapshot,EM_EXAMPLES,vacuumWavelength} from '../src/components/simulations/physics/waveModels.ts';

test('wave animation obeys the displayed frequency and wavelength independently',()=>{
 for(const [frequency,wavelength] of [[1.5,120],[.2,300],[5,20]]) {
  const a=Math.sin(wavePhase(17,wavelength,frequency,0));
  assert.ok(Math.abs(Math.sin(wavePhase(17,wavelength,frequency,1/frequency))-a)<1e-12);
  assert.ok(Math.abs(wavePhase(17+frequency*wavelength*.3,wavelength,frequency,.3)-wavePhase(17,wavelength,frequency,0))<1e-12);
 }
 assert.ok(Math.abs(wavePhase(180,120,1.5,1))<1e-12,'default crest advances180px=1.8m in1s');
});
test('outgoing diffraction fronts advance rather than contract and recycle continuously',()=>{
 assert.equal(wavefrontPhase(40,50,.2),10);
 assert.equal(wavefrontPhase(40,50,.4),20);
 assert.ok(Math.abs(wavefrontPhase(40,50,.799)-39.95)<1e-10);
 assert.ok(Math.abs(wavefrontPhase(40,50,.801)+40-40.05)<1e-10);
});
test('compression agrees with positive pressure, with quarter-cycle displacement offset',()=>{
 const h=1e-5;
 for(const phase of [0,Math.PI/2,Math.PI,3*Math.PI/2]) {
  const slope=(soundSnapshot(phase+h).displacement-soundSnapshot(phase-h).displacement)/(2*h);
  assert.ok(Math.abs(soundSnapshot(phase).pressure+slope)<1e-9);
 }
 assert.equal(soundSnapshot(Math.PI).pressure,1);
 assert.ok(Math.abs(soundSnapshot(Math.PI).displacement)<1e-12);
});
test('seven discrete EM examples use consistent vacuum frequency/wavelength pairs',()=>{
 assert.equal(new Set(EM_EXAMPLES.map(x=>x.id)).size,7);
 for(const example of EM_EXAMPLES) assert.ok(Math.abs(example.frequency*vacuumWavelength(example.frequency)-3e8)<1e-5);
 const visible=vacuumWavelength(EM_EXAMPLES.find(x=>x.id==='visible').frequency);
 assert.equal(visible,500e-9);
 assert.ok(visible>=380e-9&&visible<=700e-9);
 assert.equal(vacuumWavelength(EM_EXAMPLES.find(x=>x.id==='uv').frequency),100e-9);
});
