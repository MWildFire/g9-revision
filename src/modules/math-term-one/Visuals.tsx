import { useId, useState } from 'react';

export function CoordinateVisual() {
  return <figure className="mathrev-figure"><svg viewBox="0 0 540 330" role="img" aria-label="A at minus 2 comma 1 and B at 4 comma 9. Horizontal change 6, vertical change 8, distance 10. Midpoint 1 comma 5.">
    <path d="M55 280H500M190 305V25" stroke="#596774" strokeWidth="1.5"/>
    <path d="M110 255H350V55" fill="none" stroke="#9e532f" strokeWidth="2" strokeDasharray="7 5"/>
    <path d="M110 255L350 55" stroke="#234e69" strokeWidth="4"/><path d="M332 255V237H350" fill="none" stroke="#9e532f" strokeWidth="2"/>
    <circle cx="110" cy="255" r="6" fill="#234e69"/><circle cx="350" cy="55" r="6" fill="#234e69"/><circle cx="230" cy="155" r="6" fill="#ac552d"/>
    <g fill="#243342" fontSize="17"><text x="45" y="242">A(−2, 1)</text><text x="360" y="48">B(4, 9)</text><text x="244" y="156">M(1, 5)</text><text x="211" y="276">Δx = 6</text><text x="365" y="172">Δy = 8</text><text x="117" y="140">d = 10</text><text x="492" y="308">x</text><text x="170" y="30">y</text></g>
  </svg><figcaption>Distance uses the right triangle; gradient uses rise ÷ run. Coordinates are labelled explicitly; the diagram is schematic.</figcaption></figure>;
}
export function InequalityVisual() {
  return <figure className="mathrev-figure"><svg viewBox="0 0 540 170" role="img" aria-label="Number line showing x greater than minus 3, with an open circle at minus 3 and an arrow to the right."><path d="M45 85H490" stroke="#596774" strokeWidth="2"/><path d="M150 85H482L467 77M482 85L467 93" fill="none" stroke="#234e69" strokeWidth="5"/><path d="M150 77V95M285 77V95M420 77V95" stroke="#596774" strokeWidth="2"/><circle cx="150" cy="85" r="8" fill="#faf7f1" stroke="#234e69" strokeWidth="3"/><g fill="#243342" fontSize="20"><text x="138" y="125">−3</text><text x="280" y="125">0</text><text x="415" y="125">3</text><text x="220" y="43">x &gt; −3</text></g></svg><figcaption>An open circle excludes −3. Every value to its right satisfies x &gt; −3.</figcaption></figure>;
}
export function VennVisual({ fixed = false }: { fixed?: boolean }) {
  const [region, setRegion] = useState('intersection');
  const id = useId().replace(/:/g, '');
  const labels: Record<string, string> = { intersection: 'A ∩ B · both', union: 'A ∪ B · either or both', only: 'A ∩ B′ · A only', neither: '(A ∪ B)′ · neither' };
  return <figure className="mathrev-figure">{!fixed && <div className="mathrev-venn-controls" aria-label="Venn region">{Object.entries(labels).map(([value, label]) => <button key={value} type="button" aria-pressed={region === value} onClick={() => setRegion(value)}>{label}</button>)}</div>}<svg viewBox="0 0 540 275" role="img" aria-label={`Venn diagram shaded for ${labels[region]}`}><defs><clipPath id={`${id}-a`}><circle cx="218" cy="145" r="87"/></clipPath><mask id={`${id}-outside`}><rect width="540" height="275" fill="white"/><circle cx="322" cy="145" r="87" fill="black"/>{region === 'neither' && <circle cx="218" cy="145" r="87" fill="black"/>}</mask></defs><rect x="24" y="20" width="492" height="234" rx="5" fill="#faf7f1" stroke="#596774" strokeWidth="2"/>{region === 'intersection' && <circle cx="322" cy="145" r="87" fill="#93b4ca" clipPath={`url(#${id}-a)`}/>} {region === 'union' && <g fill="#93b4ca"><circle cx="218" cy="145" r="87"/><circle cx="322" cy="145" r="87"/></g>}{region === 'only' && <circle cx="218" cy="145" r="87" fill="#93b4ca" mask={`url(#${id}-outside)`}/>} {region === 'neither' && <rect x="25" y="21" width="490" height="232" fill="#93b4ca" mask={`url(#${id}-outside)`}/>}<g fill="none" stroke="#234e69" strokeWidth="2.5"><circle cx="218" cy="145" r="87"/><circle cx="322" cy="145" r="87"/></g><g fill="#243342" fontSize="21"><text x="42" y="49">U</text><text x="172" y="140">A</text><text x="349" y="140">B</text></g></svg><figcaption>{labels[region]}. The rectangle is the universal set. The blue shading marks membership.</figcaption></figure>;
}
