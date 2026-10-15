import test from 'node:test';
import assert from 'node:assert/strict';
import {filamentCurrent,buoyancyState,bulbCurrentLabel} from '../src/components/simulations/physics/electricalBuoyancyModels.ts';
import {computeFieldAngle,compassRotation,solenoidInternalAngle,solenoidExternalAngle} from '../src/components/simulations/physics/magneticModels.ts';
import {scatteringSketch} from '../src/modules/physics-september/model.ts';

test('passive filament characteristic is odd, has positive resistance and increases resistance with voltage',()=>{
 assert.equal(filamentCurrent(0),0);
 for(const v of [.1,1,3,6]) {
  assert.equal(filamentCurrent(-v),-filamentCurrent(v));
  assert.ok(v/filamentCurrent(v)>0);
 }
 assert.ok(6/filamentCurrent(6)>1/filamentCurrent(1));
});
test('Archimedes equilibrium uses physical ratio even close to zero or one',()=>{
 for(const [object,fluid] of [[.1,13.6],[2.95,3],[.7,1]]) {
  const s=buoyancyState(object,fluid);
  assert.equal(s.verdict,'floats');
  assert.ok(Math.abs(fluid*s.fraction-object)<1e-12,'upthrust balances weight per unit volume');
 }
 assert.equal(buoyancyState(3,3).verdict,'neutralBuoyancy');
 assert.equal(buoyancyState(3.05,3).verdict,'sinks');
});
test('small electrical current is distinguished from an open circuit and burned lamp',()=>{
 assert.equal(bulbCurrentLabel(true,.5/90),'dim');
 assert.equal(bulbCurrentLabel(true,0),'no-current');
 assert.equal(bulbCurrentLabel(false,0),'burned');
});
test('magnetic field and north compass obey current reversal and the right hand rule',()=>{
 const right=computeFieldAngle('wire',300,150,2);
 assert.equal(right,-90); assert.equal(compassRotation(right),0,'north tip initially points upward');
 assert.equal(computeFieldAngle('wire',300,150,-2),90);
 for(const source of ['wire','solenoid']) assert.ok(Number.isNaN(computeFieldAngle(source,240,20,0)));
 assert.equal(computeFieldAngle('bar',240,20,0),0,'external field N-left to S-right');
 assert.ok(Math.abs(computeFieldAngle('solenoid',240,20,2))<1e-12);
 assert.equal(Math.abs(computeFieldAngle('solenoid',240,20,-2)),180);
 assert.equal(solenoidInternalAngle(2),Math.PI); assert.equal(solenoidExternalAngle(2),0);
 assert.equal(solenoidInternalAngle(-2),0); assert.equal(solenoidExternalAngle(-2),Math.PI);
});
test('repulsive scattering bends away on both sides with mirror symmetry and a head-on return',()=>{
 for(const nuclear of [true,false]) for(const offset of [65,10]) {
  const a=scatteringSketch(offset,nuclear),b=scatteringSketch(-offset,nuclear);
  assert.ok(a.endY<a.y); assert.ok(b.endY>b.y);
  assert.equal(a.y+b.y,290); assert.equal(a.endY+b.endY,290);
 }
 assert.deepEqual(scatteringSketch(0,true),{y:145,close:true,endY:145});
 assert.equal(scatteringSketch(0,false).endY,145);
});
