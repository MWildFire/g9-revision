import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { Formula } from '../../ui/Formula';
import { lensImageDistance, format } from '../../../lib/physics';

const W = 600;
const H = 300;
const CY = H / 2;
const LENS_X = W / 2;
const OBJECT_HEIGHT = 60;

export function LensSim() {
  const { t } = useTranslation();
  const [u, setU] = useState(140);
  const [f, setF] = useState(80);

  const v = lensImageDistance(u, f);
  const mag = v !== null && u !== 0 ? -v / u : null;

  const isReal = v !== null && v > 0;
  const isVirtual = v !== null && v < 0;

  const objectX = LENS_X - u;
  const objectTopY = CY - OBJECT_HEIGHT;

  // Image (real or virtual): position relative to lens
  // For real images: imageX = LENS_X + v (right side), height = mag * OBJECT_HEIGHT (negative = inverted)
  // For virtual images: imageX = LENS_X + v (left side, since v<0), height upright
  let imageX = 0;
  let imageH = 0;
  if (v !== null && mag !== null) {
    imageX = LENS_X + v;
    imageH = mag * OBJECT_HEIGHT;
  }

  // Compute key ray endpoints
  // Ray 1: parallel to axis from object top, refracts through F' on right
  const Fprime = LENS_X + f;
  // After lens: passes through (LENS_X, objectTopY) and (Fprime, CY)
  // Slope after lens: (CY - objectTopY) / (Fprime - LENS_X) = OBJECT_HEIGHT / f
  // Extend to right edge:
  const ray1EndX = W - 5;
  const ray1Slope = OBJECT_HEIGHT / f;
  const ray1EndY = objectTopY + ray1Slope * (ray1EndX - LENS_X);

  // For virtual image, ray 1 needs backward-extension to left
  const ray1BackX = 5;
  const ray1BackY = objectTopY + ray1Slope * (ray1BackX - LENS_X);

  // Ray 2: through lens center, undeflected
  const ray2Slope = (CY - objectTopY) / (LENS_X - objectX);
  const ray2EndX = W - 5;
  const ray2EndY = objectTopY + ray2Slope * (ray2EndX - objectX);

  // Ray 3: from object through F (left focal point) to lens, then parallel to axis
  const F = LENS_X - f;
  // From object to F, slope = (CY - objectTopY) / (F - objectX)
  const ray3DenomX = F - objectX;
  const drawRay3 = Math.abs(ray3DenomX) > 1; // skip if object too close to F
  const ray3Slope = drawRay3 ? OBJECT_HEIGHT / ray3DenomX : 0;
  const ray3LensY = objectTopY + ray3Slope * (LENS_X - objectX);
  const ray3EndX = W - 5;
  // After lens, parallel to axis at y = ray3LensY

  return (
    <SimulationPanel title={t('wavesOptics.sim5.title')} description={t('wavesOptics.sim5.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full bg-bg-primary rounded-md border border-border">
          {/* axis */}
          <line x1="0" y1={CY} x2={W} y2={CY} stroke="#9c8b73" strokeWidth="1" strokeDasharray="4 4" />

          {/* lens */}
          <g>
            <path
              d={`M ${LENS_X} ${CY - 110} Q ${LENS_X + 18} ${CY} ${LENS_X} ${CY + 110} Q ${LENS_X - 18} ${CY} ${LENS_X} ${CY - 110} Z`}
              fill="#a8b8c8"
              opacity="0.5"
              stroke="#6b5b47"
              strokeWidth="1.5"
            />
          </g>

          {/* focal points */}
          <FocalPoint x={F} y={CY} label="F" />
          <FocalPoint x={Fprime} y={CY} label="F′" />

          {/* Ray 1: from object top, parallel to axis until lens, then through F' */}
          <line x1={objectX} y1={objectTopY} x2={LENS_X} y2={objectTopY} stroke="#a8b5a0" strokeWidth="1.5" />
          <line x1={LENS_X} y1={objectTopY} x2={ray1EndX} y2={ray1EndY} stroke="#a8b5a0" strokeWidth="1.5" />
          {isVirtual ? (
            <line x1={LENS_X} y1={objectTopY} x2={ray1BackX} y2={ray1BackY} stroke="#a8b5a0" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
          ) : null}

          {/* Ray 2: through center, undeflected */}
          <line x1={objectX} y1={objectTopY} x2={ray2EndX} y2={ray2EndY} stroke="#c99a8e" strokeWidth="1.5" />
          {isVirtual ? (
            <line x1={objectX} y1={objectTopY} x2={5} y2={objectTopY + ray2Slope * (5 - objectX)} stroke="#c99a8e" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
          ) : null}

          {/* Ray 3: through F, then parallel after lens */}
          {drawRay3 ? (
            <>
              <line x1={objectX} y1={objectTopY} x2={LENS_X} y2={ray3LensY} stroke="#c9a876" strokeWidth="1.5" />
              <line x1={LENS_X} y1={ray3LensY} x2={ray3EndX} y2={ray3LensY} stroke="#c9a876" strokeWidth="1.5" />
            </>
          ) : null}

          {/* Object (arrow) */}
          <g>
            <line x1={objectX} y1={CY} x2={objectX} y2={objectTopY} stroke="#3d2f1f" strokeWidth="2.5" />
            <polygon
              points={`${objectX},${objectTopY} ${objectX - 5},${objectTopY + 8} ${objectX + 5},${objectTopY + 8}`}
              fill="#3d2f1f"
            />
            <text x={objectX} y={CY + 14} textAnchor="middle" fontSize="9" fill="#6b5b47" fontFamily="JetBrains Mono">
              object
            </text>
          </g>

          {/* Image */}
          {v !== null && Math.abs(imageH) > 1 ? (
            <g opacity={isReal ? 1 : 0.85}>
              <line
                x1={imageX}
                y1={CY}
                x2={imageX}
                y2={CY - imageH}
                stroke={isReal ? '#3d2f1f' : '#c99a8e'}
                strokeWidth="2.5"
                strokeDasharray={isVirtual ? '6 4' : undefined}
              />
              <polygon
                points={
                  imageH > 0
                    ? `${imageX},${CY - imageH} ${imageX - 5},${CY - imageH + 8} ${imageX + 5},${CY - imageH + 8}`
                    : `${imageX},${CY - imageH} ${imageX - 5},${CY - imageH - 8} ${imageX + 5},${CY - imageH - 8}`
                }
                fill={isReal ? '#3d2f1f' : '#c99a8e'}
              />
              <text x={imageX} y={CY + 14} textAnchor="middle" fontSize="9" fill={isReal ? '#3d2f1f' : '#c99a8e'} fontFamily="JetBrains Mono">
                {isReal ? 'real image' : 'virtual image'}
              </text>
            </g>
          ) : null}

          <text x="10" y="14" fontSize="10" fill="#6b5b47" fontFamily="JetBrains Mono">
            u = {u}
          </text>
          <text x={W - 10} y="14" fontSize="10" fill="#6b5b47" textAnchor="end" fontFamily="JetBrains Mono">
            f = {f}
          </text>
        </svg>

        <div className="space-y-4">
          <Slider label={t('wavesOptics.sim5.objectDistance')} unit="px" min={20} max={260} step={2} value={u} onChange={setU} />
          <Slider label={t('wavesOptics.sim5.focalLength')} unit="px" min={20} max={180} step={2} value={f} onChange={setF} />

          <Formula caption="1/v = 1/f − 1/u">
            v = {v !== null ? format(v, 1) : '—'} px
          </Formula>

          <div className="bg-bg-tertiary border border-border rounded-md px-4 py-2.5 text-sm space-y-0.5">
            <div className="flex justify-between">
              <span className="text-text-muted">{t('wavesOptics.sim5.imageDistance')}</span>
              <span className="font-mono">{v !== null ? format(v, 1) : '—'} px</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">{t('wavesOptics.sim5.magnification')}</span>
              <span className="font-mono">{mag !== null ? format(mag, 2) : '—'}</span>
            </div>
            <div className="pt-1.5 mt-1.5 border-t border-border space-y-0.5">
              <div className="flex justify-between text-xs">
                <span className="text-text-muted">Type</span>
                <span>{isReal ? t('wavesOptics.sim5.real') : isVirtual ? t('wavesOptics.sim5.virtual') : '—'}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-text-muted">Orientation</span>
                <span>
                  {mag === null
                    ? '—'
                    : mag > 0
                      ? t('wavesOptics.sim5.upright')
                      : t('wavesOptics.sim5.inverted')}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-text-muted">Size</span>
                <span>
                  {mag === null
                    ? '—'
                    : Math.abs(mag) >= 1
                      ? t('wavesOptics.sim5.magnified')
                      : t('wavesOptics.sim5.diminished')}
                </span>
              </div>
            </div>
          </div>

          <div className="text-xs text-text-muted leading-relaxed">
            <span style={{ color: '#a8b5a0' }}>━</span> Ray 1: parallel → through F′ &nbsp;
            <span style={{ color: '#c99a8e' }}>━</span> Ray 2: through center &nbsp;
            <span style={{ color: '#c9a876' }}>━</span> Ray 3: through F → parallel
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}

function FocalPoint({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="3" fill="#6b5b47" />
      <text x={x} y={y + 16} textAnchor="middle" fontSize="10" fill="#9c8b73">
        {label}
      </text>
    </g>
  );
}
