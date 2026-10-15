import test from 'node:test';
import assert from 'node:assert/strict';
import { fallingSpeed } from '../src/components/simulations/physics/fallingModel.ts';

test('falling speed converges to terminal value without canvas collisions or frame-size instability',()=>{
 const terminal=Math.sqrt(80*9.81/.4);
 let speed=0;
 for(let frame=0;frame<31*60;frame++) speed=fallingSpeed(speed,80,.4,1/60);
 assert.ok(Math.abs(speed-terminal*Math.tanh(9.81*31/terminal))<1e-10);
 assert.ok(speed>44 && speed<44.4);
 const reduced=Math.sqrt(80*9.81/4.8);
 const after=fallingSpeed(speed,80,4.8,8);
 assert.ok(after>reduced && after<reduced+.001);
 assert.ok(Math.abs(fallingSpeed(speed,80,4.8,100)-reduced)<1e-10);
 assert.equal(fallingSpeed(0,80,.4,0),0);
});
