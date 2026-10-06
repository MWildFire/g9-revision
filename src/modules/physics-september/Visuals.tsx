import { useState } from "react";
import { useTranslation } from "react-i18next";
import { decayStep, daughter, remaining } from "./model";
import type { Visual } from "./types";
const useText = () => {
  const { i18n } = useTranslation();
  return (en: string, ru: string) => (i18n.language.startsWith("ru") ? ru : en);
};
const fmt = (n: number) => Number(n.toFixed(2)).toLocaleString("en-GB");
function AtomLab() {
  const t = useText();
  const options = [
    { name: "Carbon-12 / Углерод-12", A: 12, Z: 6, charge: 0 },
    { name: "Carbon-14 / Углерод-14", A: 14, Z: 6, charge: 0 },
    { name: "Na-23", A: 23, Z: 11, charge: 0 },
    { name: "Na-23⁺", A: 23, Z: 11, charge: 1 },
    { name: "Mg-24²⁺", A: 24, Z: 12, charge: 2 },
  ];
  const [index, setIndex] = useState(0);
  const a = options[index];
  const e = a.Z - a.charge;
  const shells = [
    Math.min(e, 2),
    Math.min(Math.max(e - 2, 0), 8),
    Math.max(e - 10, 0),
  ];
  return (
    <>
      <label>
        {t("Choose an atom or ion", "Выбери атом или ион")}
        <select value={index} onChange={(v) => setIndex(+v.target.value)}>
          {options.map((o, i) => (
            <option key={o.name} value={i}>
              {o.name}
            </option>
          ))}
        </select>
      </label>
      <svg
        viewBox="0 0 540 290"
        role="img"
        aria-label={t(
          "Nucleus and electron energy-level model",
          "Модель ядра и уровней энергии электронов",
        )}
      >
        {[45, 85, 125].map(
          (r, i) =>
            shells[i] > 0 && (
              <circle
                key={r}
                cx="270"
                cy="145"
                r={r}
                fill="none"
                stroke="#c2cec7"
                strokeWidth="1.5"
              />
            ),
        )}
        {shells.flatMap((count, layer) =>
          Array.from({ length: count }, (_, j) => {
            const angle = (j / count) * Math.PI * 2;
            const r = [45, 85, 125][layer];
            return (
              <g key={`${layer}-${j}`}>
                <circle
                  cx={270 + Math.cos(angle) * r}
                  cy={145 + Math.sin(angle) * r}
                  r="8"
                  fill="#315b83"
                />
                <text
                  x={270 + Math.cos(angle) * r}
                  y={150 + Math.sin(angle) * r}
                  textAnchor="middle"
                  fill="white"
                  fontSize="13"
                >
                  −
                </text>
              </g>
            );
          }),
        )}
        <circle cx="270" cy="145" r="29" fill="#184f46" />
        <text x="270" y="140" textAnchor="middle" fill="white" fontSize="13">
          {a.Z} p⁺
        </text>
        <text x="270" y="157" textAnchor="middle" fill="white" fontSize="13">
          {a.A - a.Z} n
        </text>
      </svg>
      <div className="nuclear-stats" aria-live="polite">
        <span>Z = {a.Z}</span>
        <span>A = {a.A}</span>
        <span>n = {a.A - a.Z}</span>
        <span>e⁻ = {e}</span>
        <span>
          {t("Charge", "Заряд")}: {a.charge ? `+${a.charge}` : "0"}
        </span>
      </div>
      <p>
        {t(
          "Not to scale. Circles represent energy levels, not measured planetary paths. Change C-12 to C-14: the nucleus changes but neutral electron count does not.",
          "Не в масштабе. Окружности обозначают уровни энергии, не измеренные планетарные орбиты. При смене C-12 на C-14 меняется ядро, но не число электронов нейтрального атома.",
        )}
      </p>
    </>
  );
}
function ScatteringLab() {
  const t = useText();
  const [nuclear, setNuclear] = useState(true);
  const [offset, setOffset] = useState(65);
  const y = 145 - offset;
  const close = Math.abs(offset) < 20;
  const endY = nuclear
    ? close
      ? 25
      : Math.max(15, y - 40 * (1 - Math.abs(offset) / 100))
    : y - 8;
  return (
    <>
      <div className="nuclear-actions">
        <button aria-pressed={nuclear} onClick={() => setNuclear(true)}>
          {t("Nuclear model", "Ядерная модель")}
        </button>
        <button aria-pressed={!nuclear} onClick={() => setNuclear(false)}>
          {t("Plum pudding", "Модель Томсона")}
        </button>
      </div>
      <label>
        {t(
          "Offset of the incoming alpha path",
          "Смещение начального пути альфа-частицы",
        )}
        : {offset}
        <input
          type="range"
          min="-90"
          max="90"
          value={offset}
          onChange={(e) => setOffset(+e.target.value)}
        />
      </label>
      <svg
        viewBox="0 0 540 290"
        role="img"
        aria-label={t(
          "Schematic alpha scattering",
          "Схема рассеяния альфа-частицы",
        )}
      >
        <circle
          cx="280"
          cy="145"
          r="105"
          fill={nuclear ? "#eef3ed" : "#e9c9ad"}
          stroke="#b3c4b9"
        />
        {nuclear ? (
          <circle cx="280" cy="145" r="12" fill="#a64d36" />
        ) : (
          <text
            x="280"
            y="150"
            textAnchor="middle"
            fill="#733923"
            fontSize="34"
          >
            + + +
          </text>
        )}
        <path
          d={
            nuclear && close
              ? `M 25 ${y} L 215 ${y} Q 250 ${y} 200 ${endY} L 70 ${endY}`
              : `M 25 ${y} L 215 ${y} Q 270 ${y} 320 ${endY} L 510 ${endY}`
          }
          stroke="#b55a25"
          strokeWidth="4"
          fill="none"
        />
        <text x="18" y="276" fill="#3d493f" fontSize="14">
          α (+2) →
        </text>
        <text
          x="280"
          y="150"
          textAnchor="middle"
          fill={nuclear ? "white" : "#733923"}
          fontSize="15"
        >
          {nuclear ? "+" : ""}
        </text>
      </svg>
      <p aria-live="polite">
        {nuclear
          ? t(
              close
                ? "A close encounter can give a very large deflection: electrostatic repulsion, not a collision with a solid atom."
                : "A distant path bends less. Most paths miss the tiny nucleus and pass almost straight.",
              close
                ? "Близкий пролёт может дать большое отклонение: электрическое отталкивание, не удар о сплошной атом."
                : "Далёкий путь отклоняется слабее. Большинство частиц проходит мимо маленького ядра почти прямо.",
            )
          : t(
              "Diffuse positive charge predicts small distributed deflections; it cannot explain the rare strong backscattering.",
              "Распределённый положительный заряд даёт малые распределённые отклонения и не объясняет редкое сильное рассеяние назад.",
            )}
      </p>
      <p className="nuclear-caption">
        {t(
          "Concept sketch: paths and size are illustrative, not a numerical Rutherford-scattering simulation.",
          "Условная схема: траектории и размеры иллюстративны, это не численный расчёт рассеяния Резерфорда.",
        )}
      </p>
    </>
  );
}
function PenetrationLab() {
  const t = useText();
  const [material, setMaterial] = useState("paper");
  const labels = [
    ["none", "No absorber", "Без экрана"],
    ["paper", "Paper", "Бумага"],
    ["aluminium", "A few mm of aluminium", "Несколько мм алюминия"],
    ["lead", "Thick lead", "Толстый свинец"],
  ];
  return (
    <>
      <label>
        {t("Absorber", "Экран")}
        <select value={material} onChange={(e) => setMaterial(e.target.value)}>
          {labels.map(([v, en, ru]) => (
            <option value={v} key={v}>
              {t(en, ru)}
            </option>
          ))}
        </select>
      </label>
      <svg
        viewBox="0 0 540 230"
        role="img"
        aria-label={t(
          "Qualitative radiation penetration comparison",
          "Качественное сравнение проникновения излучения",
        )}
      >
        {material !== "none" && (
          <rect
            x="265"
            y="16"
            width={material === "lead" ? 55 : 20}
            height="180"
            rx="4"
            fill="#9aaea5"
          />
        )}
        {["α (+2)", "β⁻ (−1)", "γ (0)"].map((label, i) => {
          const y = 50 + i * 65;
          const stopped =
            material !== "none" &&
            (i === 0 || (i === 1 && material !== "paper"));
          return (
            <g key={label}>
              <text x="10" y={y + 5} fontSize="18" fill="#34443c">
                {label}
              </text>
              <line
                x1="112"
                y1={y}
                x2={material === "none" ? 490 : 265}
                y2={y}
                stroke={["#a64d36", "#315b83", "#184f46"][i]}
                strokeWidth="5"
              />
              {!stopped && material !== "none" && (
                <line
                  x1="285"
                  y1={y}
                  x2="490"
                  y2={y}
                  stroke={["#a64d36", "#315b83", "#184f46"][i]}
                  strokeWidth="5"
                  opacity={material === "lead" ? 0.3 : 1}
                />
              )}
              <text x="355" y={y - 12} fontSize="13" fill="#34443c">
                {stopped
                  ? t("stopped", "задержано")
                  : material === "lead"
                    ? t("attenuated", "ослаблено")
                    : t("transmitted", "проходит")}
              </text>
            </g>
          );
        })}
      </svg>
      <p>
        {t(
          "Typical school comparison, not calibrated transmission data. Thickness, energy and material matter. Gamma is attenuated by lead; a finite shield is not a promise of zero radiation.",
          "Типичное школьное сравнение, не измеренные коэффициенты прохождения. Важны толщина, энергия и вещество. Свинец ослабляет гамма: конечный экран не гарантирует нулевое излучение.",
        )}
      </p>
    </>
  );
}
function EquationLab() {
  const t = useText();
  const cases = [
    {
      mode: "alpha" as const,
      A: 238,
      Z: 92,
      parent: "U",
      child: "Th",
      particle: "⁴₂He",
    },
    {
      mode: "beta" as const,
      A: 14,
      Z: 6,
      parent: "C",
      child: "N",
      particle: "⁰₋₁e + ν̅ₑ",
    },
    {
      mode: "gamma" as const,
      A: 99,
      Z: 43,
      parent: "Tc*",
      child: "Tc",
      particle: "γ",
    },
  ];
  const [index, setIndex] = useState(0);
  const [reveal, setReveal] = useState(false);
  const c = cases[index];
  const d = daughter(c.A, c.Z, c.mode);
  const nuclide = (A: number, Z: number, symbol: string) => (
    <span className="nuclide">
      <span>
        <sup>{A}</sup>
        <sub>{Z}</sub>
      </span>
      <strong>{symbol}</strong>
    </span>
  );
  return (
    <>
      <label>
        {t("Choose a decay", "Выбери распад")}
        <select
          value={index}
          onChange={(e) => {
            setIndex(+e.target.value);
            setReveal(false);
          }}
        >
          <option value="0">α · U-238</option>
          <option value="1">β⁻ · C-14</option>
          <option value="2">γ · Tc*</option>
        </select>
      </label>
      <div className="nuclear-equation" aria-live="polite">
        {nuclide(c.A, c.Z, c.parent)}
        <span>→</span>
        {reveal ? nuclide(d.A, d.Z, c.child) : <span>?</span>}
        <span>+</span>
        <span>{c.particle}</span>
      </div>
      <button onClick={() => setReveal((v) => !v)} aria-expanded={reveal}>
        {reveal
          ? t("Hide daughter", "Скрыть дочернее ядро")
          : t("Check the daughter", "Проверить дочернее ядро")}
      </button>
      {reveal && (
        <div className="nuclear-feedback">
          <p>
            A: {c.A} = {d.A} + {c.mode === "alpha" ? 4 : 0}
          </p>
          <p>
            Z: {c.Z} = {d.Z}{" "}
            {c.mode === "beta" ? "− 1" : c.mode === "alpha" ? "+ 2" : "+ 0"}
          </p>
          <p>
            {t("Daughter neutrons", "Нейтронов у дочернего ядра")}: {d.A - d.Z}
          </p>
        </div>
      )}
      <p className="nuclear-caption">
        {t(
          "The gamma example is a schematic excited-state transition. These balances track nucleon count and charge, not exact rest mass.",
          "Гамма-пример — схема перехода возбуждённого ядра. Балансы учитывают число нуклонов и заряд, не точную массу покоя.",
        )}
      </p>
    </>
  );
}
function DecayLab() {
  const t = useText();
  const [half, setHalf] = useState(6);
  const [time, setTime] = useState(12);
  const [background, setBackground] = useState(20);
  const initial = 320;
  const [survivors, setSurvivors] = useState(() =>
    Array.from({ length: 64 }, (_, i) => i),
  );
  const [steps, setSteps] = useState(0);
  const curve = (bg: number) =>
    Array.from({ length: 97 }, (_, i) => {
      const x = i / 4;
      return `${50 + (x / 24) * 460},${230 - ((remaining(initial, x, half) + bg) / 380) * 200}`;
    }).join(" ");
  return (
    <>
      <div className="nuclear-controls">
        <label>
          {t("Half-life (min)", "Период (мин)")}: {half}
          <input
            type="range"
            min="2"
            max="8"
            value={half}
            onChange={(e) => setHalf(+e.target.value)}
          />
        </label>
        <label>
          {t("Time (min)", "Время (мин)")}: {time}
          <input
            type="range"
            min="0"
            max="24"
            value={time}
            onChange={(e) => setTime(+e.target.value)}
          />
        </label>
        <label>
          {t("Background (counts/min)", "Фон (имп/мин)")}: {background}
          <input
            type="range"
            min="0"
            max="40"
            value={background}
            onChange={(e) => setBackground(+e.target.value)}
          />
        </label>
      </div>
      <svg
        viewBox="0 0 560 285"
        role="img"
        aria-label={t(
          "Expected net and total count rates against time",
          "Ожидаемые чистая и полная скорости счёта от времени",
        )}
      >
        {[0, 80, 160, 240, 320].map((v) => (
          <g key={v}>
            <line
              x1="50"
              x2="510"
              y1={230 - (v / 380) * 200}
              y2={230 - (v / 380) * 200}
              stroke="#dbe3dc"
            />
            <text
              x="42"
              y={235 - (v / 380) * 200}
              textAnchor="end"
              fontSize="12"
              fill="#34443c"
            >
              {v}
            </text>
          </g>
        ))}
        {[0, 6, 12, 18, 24].map((v) => (
          <text
            key={v}
            x={50 + (v / 24) * 460}
            y="250"
            textAnchor="middle"
            fontSize="12"
            fill="#34443c"
          >
            {v}
          </text>
        ))}
        <text x="55" y="16" fontSize="13" fill="#34443c">
          {t("counts/min", "имп/мин")}
        </text>
        <text x="500" y="273" textAnchor="end" fontSize="13" fill="#34443c">
          {t("time / min", "время / мин")}
        </text>
        <polyline
          points={curve(0)}
          fill="none"
          stroke="#184f46"
          strokeWidth="3"
        />
        <polyline
          points={curve(background)}
          fill="none"
          stroke="#b15c36"
          strokeWidth="3"
          strokeDasharray="7 4"
        />
        <line
          x1={50 + (time / 24) * 460}
          x2={50 + (time / 24) * 460}
          y1="25"
          y2="230"
          stroke="#52655b"
          strokeDasharray="2 4"
        />
        <circle
          cx={50 + (time / 24) * 460}
          cy={230 - ((remaining(initial, time, half) + background) / 380) * 200}
          r="5"
          fill="#b15c36"
        />
      </svg>
      <div className="nuclear-stats" aria-live="polite">
        <span>
          {t("Solid: net", "Сплошная: без фона")}{" "}
          {fmt(remaining(initial, time, half))}
        </span>
        <span>
          {t("Dashed: total", "Пунктир: с фоном")}{" "}
          {fmt(remaining(initial, time, half) + background)}
        </span>
        <span>t / T½ = {fmt(time / half)}</span>
      </div>
      <div className="nuclear-table-wrap" tabIndex={0} role="region" aria-label={t("Expected count rates table. Scroll horizontally on a narrow screen.", "Таблица ожидаемых скоростей счёта. На узком экране прокручивается по горизонтали.")}>
        <table>
          <caption>
            {t(
              "Expected count rates (counts/min)",
              "Ожидаемые скорости (имп/мин)",
            )}
          </caption>
          <thead>
            <tr>
              <th>{t("Time", "Время")}</th>
              <th>{t("Net", "Без фона")}</th>
              <th>{t("Total", "С фоном")}</th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3, 4].map((n) => (
              <tr key={n}>
                <td>{n * half} min</td>
                <td>{initial / 2 ** n}</td>
                <td>{initial / 2 ** n + background}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4>
        {t("Random population: 64 nuclei", "Случайная совокупность: 64 ядра")}
      </h4>
      <p>
        {t(
          "Each surviving nucleus has a 50% chance to decay at each step of one half-life. Outcomes vary around the expected curve.",
          "У каждого оставшегося ядра вероятность распада 50% за шаг в один период. Результаты колеблются вокруг ожидаемой кривой.",
        )}
      </p>
      <div className="nuclear-dots" aria-hidden="true">
        {Array.from({ length: 64 }, (_, i) => (
          <span key={i} className={survivors.includes(i) ? "alive" : "decayed"}>
            {survivors.includes(i) ? "●" : "×"}
          </span>
        ))}
      </div>
      <p aria-live="polite">
        {t("Half-lives elapsed", "Прошло периодов")}: {steps}.{" "}
        {t("Still present", "Осталось")}: {survivors.length};{" "}
        {t("expected", "ожидание")}: {fmt(64 / 2 ** steps)}.
      </p>
      <div className="nuclear-actions">
        <button
          disabled={steps >= 8}
          onClick={() => {
            setSurvivors((v) => decayStep(v, 0.5));
            setSteps((v) => v + 1);
          }}
        >
          {t("Advance one half-life", "Ещё один период")}
        </button>
        <button
          onClick={() => {
            setSurvivors(Array.from({ length: 64 }, (_, i) => i));
            setSteps(0);
          }}
        >
          {t("New trial", "Новый опыт")}
        </button>
      </div>
    </>
  );
}
function ContaminationLab() {
  const t = useText();
  const [dust, setDust] = useState(false);
  const [removed, setRemoved] = useState(false);
  return (
    <>
      <div className="nuclear-actions">
        <button
          aria-pressed={!dust}
          onClick={() => {
            setDust(false);
            setRemoved(false);
          }}
        >
          {t("Sealed source", "Герметичный источник")}
        </button>
        <button
          aria-pressed={dust}
          onClick={() => {
            setDust(true);
            setRemoved(false);
          }}
        >
          {t("Deposited radioactive dust", "Осевшая радиоактивная пыль")}
        </button>
      </div>
      <svg
        viewBox="0 0 540 225"
        role="img"
        aria-label={t(
          "Irradiation and contamination comparison",
          "Сравнение облучения и загрязнения",
        )}
      >
        <rect
          x="290"
          y="80"
          width="170"
          height="110"
          rx="8"
          fill="#e7d6b7"
          stroke="#9e8e6c"
        />
        <text x="375" y="150" textAnchor="middle" fill="#4a4131">
          {t("Object", "Объект")}
        </text>
        {!removed && (
          <>
            <rect x="50" y="115" width="60" height="60" rx="8" fill="#184f46" />
            <text x="80" y="152" textAnchor="middle" fill="white" fontSize="26">
              ☢
            </text>
            {[100, 135, 170].map((y) => (
              <line
                key={y}
                x1="115"
                x2="285"
                y1="145"
                y2={y}
                stroke="#b15c36"
                strokeWidth="2"
                strokeDasharray="6 5"
              />
            ))}
          </>
        )}
        {dust &&
          [310, 340, 370, 400, 430].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy={88 + (i % 2) * 15} r="5" fill="#a64d36" />
              <line
                x1={x}
                x2={x + 12}
                y1="82"
                y2="55"
                stroke="#a64d36"
                strokeWidth="2"
              />
            </g>
          ))}
      </svg>
      <button onClick={() => setRemoved((v) => !v)}>
        {removed
          ? t("Return the original source", "Вернуть исходный источник")
          : t("Remove the original source", "Убрать исходный источник")}
      </button>
      <p aria-live="polite">
        {removed
          ? dust
            ? t(
                "Radioactive atoms remain on the object: it still emits. Removing the original source did not remove the contamination.",
                "На объекте остались радиоактивные атомы: излучение продолжается. Удаление исходного источника не удалило загрязнение.",
              )
            : t(
                "No transferred radioactive material in this scenario: direct irradiation from the removed source ends.",
                "По условию вещество не переносилось: прямое облучение от удалённого источника прекратилось.",
              )
          : t(
              "Before removal: radiation reaches the object. Dust, if deposited, is an additional source on its surface.",
              "До удаления: излучение достигает объекта. Осевшая пыль — дополнительный источник на поверхности.",
            )}
      </p>
    </>
  );
}
function ChainLab() {
  const t = useText();
  const [k, setK] = useState(1);
  const values = Array.from({ length: 7 }, (_, i) => 10 * k ** i);
  const max = Math.max(10, ...values);
  return (
    <>
      <label>
        {t(
          "Average further fissions per event",
          "Среднее число следующих делений на событие",
        )}
        : {k.toFixed(1)}
        <input
          type="range"
          min="0.5"
          max="1.5"
          step="0.1"
          value={k}
          onChange={(e) => setK(+e.target.value)}
        />
      </label>
      <svg
        viewBox="0 0 540 250"
        role="img"
        aria-label={t(
          "Expected events by generation",
          "Ожидаемые события по поколениям",
        )}
      >
        {values.map((value, i) => (
          <g key={i}>
            <rect
              x={40 + i * 70}
              y={200 - (value / max) * 145}
              width="40"
              height={(value / max) * 145}
              rx="3"
              fill="#184f46"
            />
            <text
              x={60 + i * 70}
              y={190 - (value / max) * 145}
              textAnchor="middle"
              fontSize="13"
              fill="#34443c"
            >
              {fmt(value)}
            </text>
            <text
              x={60 + i * 70}
              y="222"
              textAnchor="middle"
              fontSize="13"
              fill="#34443c"
            >
              {i}
            </text>
          </g>
        ))}
        <text x="510" y="246" textAnchor="end" fontSize="13" fill="#34443c">
          {t("generation", "поколение")}
        </text>
      </svg>
      <p aria-live="polite">
        {k < 1
          ? t(
              "Below 1: the chain dies away on average.",
              "Меньше 1: в среднем цепь затухает.",
            )
          : k === 1
            ? t(
                "At 1: the expected event count stays steady.",
                "При 1: ожидаемое число событий постоянно.",
              )
            : t(
                "Above 1: the expected event count grows.",
                "Больше 1: ожидаемое число событий растёт.",
              )}
      </p>
      <p>
        {t(
          "Conceptual expected values: 10 × kⁿ. Fractions are averages, not fractional real fissions. Each chart rescales its vertical axis; compare the printed values. No reactor geometry or engineering is modelled.",
          "Условные ожидаемые значения: 10 × kⁿ. Дроби — средние, не реальные дробные деления. Вертикальный масштаб меняется: сравнивай подписанные значения. Геометрия и инженерия реактора не моделируются.",
        )}
      </p>
    </>
  );
}
function FusionLab() {
  const t = useText();
  const [joined, setJoined] = useState(false);
  return (
    <>
      <svg
        viewBox="0 0 540 240"
        role="img"
        aria-label={t(
          "Deuterium–tritium fusion particle accounting",
          "Учёт частиц при дейтерий-тритиевом синтезе",
        )}
      >
        {joined ? (
          <>
            <circle cx="285" cy="108" r="42" fill="#184f46" />
            <text x="285" y="105" textAnchor="middle" fill="white">
              ⁴₂He
            </text>
            <text
              x="285"
              y="125"
              textAnchor="middle"
              fill="white"
              fontSize="12"
            >
              2p + 2n
            </text>
            <circle cx="440" cy="80" r="14" fill="#64766d" />
            <text x="440" y="85" textAnchor="middle" fill="white">
              n
            </text>
            <path d="M 332 102 L 410 84" stroke="#9b5936" strokeWidth="3" />
            <text x="285" y="202" textAnchor="middle" fill="#7d4328">
              {t("kinetic energy released", "выделяется кинетическая энергия")}
            </text>
          </>
        ) : (
          <>
            <circle cx="140" cy="108" r="32" fill="#315b83" />
            <text x="140" y="111" textAnchor="middle" fill="white">
              ²₁H
            </text>
            <circle cx="395" cy="108" r="37" fill="#184f46" />
            <text x="395" y="111" textAnchor="middle" fill="white">
              ³₁H
            </text>
            <text
              x="270"
              y="113"
              textAnchor="middle"
              fill="#9b5936"
              fontSize="27"
            >
              ← + + →
            </text>
            <text x="270" y="180" textAnchor="middle" fill="#34443c">
              {t("positive nuclei repel", "положительные ядра отталкиваются")}
            </text>
          </>
        )}
      </svg>
      <button onClick={() => setJoined((v) => !v)}>
        {joined
          ? t("Show initial nuclei", "Показать исходные ядра")
          : t("Show reaction products", "Показать продукты реакции")}
      </button>
      <p>²₁H + ³₁H → ⁴₂He + ¹₀n + {t("energy", "энергия")}</p>
      <p>
        {t(
          "Nucleons: 5 → 5. Charge: +2 → +2. A reaction diagram is not a time-accurate collision simulation. Close approach needs high kinetic energy and appropriate conditions.",
          "Нуклоны: 5 → 5. Заряд: +2 → +2. Схема не моделирует реальное время столкновения. Сближение требует большой кинетической энергии и подходящих условий.",
        )}
      </p>
    </>
  );
}
export function VisualLab({ kind }: { kind: Visual }) {
  const t = useText();
  const components = {
    atom: AtomLab,
    scattering: ScatteringLab,
    penetration: PenetrationLab,
    equation: EquationLab,
    decay: DecayLab,
    contamination: ContaminationLab,
    chain: ChainLab,
    fusion: FusionLab,
  };
  const Component = components[kind];
  return (
    <section className="nuclear-visual">
      <div className="nuclear-eyebrow">
        {t("Explore the model", "Исследуй модель")}
      </div>
      <Component />
    </section>
  );
}
