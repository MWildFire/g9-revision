import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Atom,
  BookOpen,
  Check,
  ClipboardList,
  Printer,
} from "lucide-react";
import { lessons } from "./lessons";
import { questions } from "./questions";
import { papers } from "./papers";
import { commandTerms, glossary, sources } from "./reference";
import { VisualLab } from "./Visuals";
import { parseStudyState, STUDY_KEY, type StudyState } from "./model";
import type { Bilingual, Question } from "./types";
import "./physics-september.css";
const BASE = "/physics-september-2026";
const useText = () => {
  const { i18n } = useTranslation();
  const ru = i18n.language.startsWith("ru");
  return {
    ru,
    t: (en: string, rus: string) => (ru ? rus : en),
    txt: (v: Bilingual) => (ru ? v.ru : v.en),
  };
};
const Text = ({ value }: { value: Bilingual }) => {
  const { txt } = useText();
  return <p className="nuclear-prose">{txt(value)}</p>;
};
type Store = {
  state: StudyState;
  answer: (id: string, value: string) => void;
  complete: (id: string) => void;
  warning: boolean;
};
function useStudyStore(): Store {
  const [state, setState] = useState<StudyState>(() => {
    try {
      return parseStudyState(localStorage.getItem(STUDY_KEY));
    } catch {
      return parseStudyState(null);
    }
  });
  const [warning, setWarning] = useState(false);
  const save = (next: StudyState) => {
    setState(next);
    try {
      localStorage.setItem(STUDY_KEY, JSON.stringify(next));
      setWarning(false);
    } catch {
      setWarning(true);
    }
  };
  return {
    state,
    warning,
    answer: (id, value) =>
      save({ ...state, answers: { ...state.answers, [id]: value } }),
    complete: (id) =>
      save({
        ...state,
        completed: state.completed.includes(id)
          ? state.completed.filter((v) => v !== id)
          : [...state.completed, id],
      }),
  };
}
function QuestionCard({
  question: q,
  store,
  number,
  exam = false,
  review = false,
  onMark,
}: {
  question: Question;
  store: Store;
  number: number;
  exam?: boolean;
  review?: boolean;
  onMark?: (value: number) => void;
}) {
  const { t, txt } = useText();
  const [checked, setChecked] = useState<number[]>([]);
  const solution = (
    <div className="nuclear-solution">
      <p className="nuclear-eyebrow">
        {t("One point for each valid step", "По одному баллу за верный пункт")}
      </p>
      <ol>
        {q.marking.map((m, i) => (
          <li key={i}>
            {onMark ? (
              <label className="nuclear-mark">
                <input
                  type="checkbox"
                  checked={checked.includes(i)}
                  onChange={(e) => {
                    const next = e.target.checked
                      ? [...checked, i]
                      : checked.filter((n) => n !== i);
                    setChecked(next);
                    onMark(next.length);
                  }}
                />
                <span>{txt(m)}</span>
              </label>
            ) : (
              txt(m)
            )}
          </li>
        ))}
      </ol>
      <p className="nuclear-caption">
        {t(
          "Equivalent correct reasoning is accepted. Do not count the same idea twice. These are practice marks, not an IB level.",
          "Равнозначное верное объяснение принимается. Не считай одну мысль дважды. Это тренировочные баллы, не уровень IB.",
        )}
      </p>
    </div>
  );
  return (
    <article className="nuclear-question" id={q.id}>
      <div className="nuclear-question-meta">
        <span>
          {t("Question", "Задача")} {number} · {q.strand}
        </span>
        <span>
          {q.marking.length} {t("marks", "балла")}
        </span>
      </div>
      <Text value={q.prompt} />
      <label className="nuclear-answer-label" htmlFor={`answer-${q.id}`}>
        {t("Your reasoning and working", "Твои рассуждения и решение")}
      </label>
      <textarea
        id={`answer-${q.id}`}
        rows={4}
        value={store.state.answers[q.id] ?? ""}
        placeholder={t(
          "Write your answer before opening the solution…",
          "Запиши ответ до просмотра решения…",
        )}
        onChange={(e) => store.answer(q.id, e.target.value)}
      />
      <p className="nuclear-print-answer">
        {store.state.answers[q.id] ||
          "________________________________________________"}
      </p>
      {!exam && (
        <details className="nuclear-hint">
          <summary>
            {t("A hint, not the answer", "Подсказка без ответа")}
          </summary>
          <Text value={q.hint} />
        </details>
      )}
      {exam ? (
        review && solution
      ) : (
        <details className="nuclear-answer">
          <summary>
            {t("Show solution and marking", "Открыть решение и баллы")}
          </summary>
          {solution}
        </details>
      )}
    </article>
  );
}
function Overview({ store }: { store: Store }) {
  const { t, txt } = useText();
  const complete = lessons.filter((l) =>
    store.state.completed.includes(l.id),
  ).length;
  return (
    <>
      <section className="nuclear-hero">
        <div>
          <p className="nuclear-eyebrow">GRADE 10 · IB MYP · CRITERION A</p>
          <h1>{t("Physics. September 2026.", "Физика. Сентябрь 2026.")}</h1>
          <p>
            {t(
              "From the atom to nuclear energy. A dedicated preparation pack for the topic list supplied on 29 September.",
              "От атома до ядерной энергии. Отдельная подготовка по списку тем, переданному 29 сентября.",
            )}
          </p>
          <div className="nuclear-actions">
            <Link className="nuclear-primary" to={`${BASE}/atomic-structure`}>
              {t("Start with the atom", "Начать со строения атома")}{" "}
              <ArrowRight size={17} />
            </Link>
            <Link to={`${BASE}/practice`}>
              {t("Go to practice", "Перейти к задачам")}
            </Link>
          </div>
        </div>
        <div className="nuclear-hero-art" aria-hidden="true">
          <Atom size={146} strokeWidth={0.8} />
          <span>α · β⁻ · γ</span>
        </div>
      </section>
      <div className="nuclear-metrics">
        <span>
          <strong>12</strong>
          {t("topics from the photo", "тем с фотографии")}
        </span>
        <span>
          <strong>24</strong>
          {t("worked examples", "разобранных примера")}
        </span>
        <span>
          <strong>48</strong>
          {t("practice questions", "задач для практики")}
        </span>
        <span>
          <strong>2 × 40</strong>
          {t("practice papers · marks", "варианта · баллы")}
        </span>
      </div>
      <section className="nuclear-note">
        <h2>
          {t("What this pack prepares you to do", "Что ты научишься делать")}
        </h2>
        <p>
          {t(
            "A(i): explain the science. A(ii): solve familiar and unfamiliar problems. A(iii): analyse evidence and make a scientifically supported judgment. Calculations matter, but a full criterion-A answer also explains why.",
            "A(i): объяснять физику. A(ii): решать знакомые и новые задачи. A(iii): анализировать данные и делать научно обоснованные выводы. Важны расчёты и объяснение, почему результат имеет смысл.",
          )}
        </p>
        <p className="nuclear-caption">
          {t(
            "Scope: all 12 bullets in the supplied PiXL Atomic structure overview. September is the pack label, not an invented exam date. Original practice, not an official IB paper or a guarantee of the school’s questions. HT labels on the slide do not exclude fission or fusion here.",
            "Охват: все 12 пунктов переданного обзора PiXL Atomic structure. Сентябрь — название подготовки, не придуманная дата работы. Задания авторские: это не официальный вариант IB и не обещание школьных вопросов. Пометка HT на слайде не исключает деление и синтез из этого раздела.",
          )}
        </p>
      </section>
      <div className="nuclear-section-title">
        <h2>{t("Your learning route", "Маршрут подготовки")}</h2>
        <span>
          {complete} / 12 {t("self-checked", "отмечено после самопроверки")}
        </span>
      </div>
      <div className="nuclear-lesson-grid">
        {lessons.map((lesson, i) => (
          <Link
            className="nuclear-lesson-card"
            to={`${BASE}/${lesson.id}`}
            key={lesson.id}
          >
            <div className="nuclear-card-number">
              {String(i + 1).padStart(2, "0")}
              {store.state.completed.includes(lesson.id) && <Check size={18} />}
            </div>
            <h3>{txt(lesson.title)}</h3>
            <p>{txt(lesson.intro)}</p>
            <span>
              {t(
                "Theory · model · examples · 4 questions",
                "Теория · модель · примеры · 4 задачи",
              )}{" "}
              <ArrowRight size={15} />
            </span>
          </Link>
        ))}
      </div>
      <section className="nuclear-plan">
        <h2>{t("A practical revision sequence", "Как готовиться")}</h2>
        <ol>
          <li>
            {t(
              "Foundation: lessons 1–4. Say each definition out loud and explain the scattering evidence without notes.",
              "Основа: темы 1–4. Проговори определения и объясни опыт с рассеянием без конспекта.",
            )}
          </li>
          <li>
            {t(
              "Calculations: lessons 5–6 and 8–9. Practise charge balance, count-rate correction and repeated halving.",
              "Расчёты: темы 5–6 и 8–9. Отработай баланс заряда, поправку на фон и деление пополам.",
            )}
          </li>
          <li>
            {t(
              "Application: lessons 7 and 10–12. Justify choices using a property, evidence and a limitation.",
              "Применение: темы 7 и 10–12. Обосновывай выбор свойством, данными и ограничением.",
            )}
          </li>
          <li>
            {t(
              "Attempt a timed paper without solutions. Mark each point, revisit weak topics, then use the second paper.",
              "Реши вариант на время без решений. Проверь каждый пункт, вернись к слабым темам и затем реши второй вариант.",
            )}
          </li>
        </ol>
      </section>
      <div className="nuclear-paper-cards">
        {papers.map((p) => (
          <Link key={p.id} to={`${BASE}/${p.id}`}>
            <ClipboardList />
            <h3>{txt(p.title)}</h3>
            <p>
              {p.minutes}{" "}
              {t(
                "minutes suggested · 40 practice marks",
                "минут для тренировки · 40 баллов",
              )}
            </p>
            <span>{t("Open paper", "Открыть вариант")} →</span>
          </Link>
        ))}
      </div>
      <p className="nuclear-caption">
        {t(
          "Answers and completion ticks are saved in this browser only. They do not sync across devices, and a completion tick is not proof of mastery.",
          "Ответы и отметки сохраняются только в этом браузере. Между устройствами они не синхронизируются; отметка не доказывает освоение темы.",
        )}
      </p>
    </>
  );
}
function LessonPage({ store }: { store: Store }) {
  const { topicId } = useParams();
  const { t, txt } = useText();
  const lesson = lessons.find((l) => l.id === topicId);
  if (!lesson)
    return (
      <div>
        <h1>{t("Topic not found", "Тема не найдена")}</h1>
        <Link to={BASE}>{t("Back to the topic list", "К списку тем")}</Link>
      </div>
    );
  const index = lessons.indexOf(lesson);
  return (
    <article className="nuclear-lesson">
      <p className="nuclear-eyebrow">
        {String(index + 1).padStart(2, "0")} / 12 · CRITERION A
      </p>
      <h1>{txt(lesson.title)}</h1>
      <p className="nuclear-lead">{txt(lesson.intro)}</p>
      <p className="nuclear-caption">
        {t("Photo checklist", "Пункт фотографии")}: {lesson.photoTopic}
      </p>
      <div className="nuclear-contents">
        <strong>{t("In this lesson", "В этой теме")}</strong>
        {lesson.sections.map((s, i) => (
          <a
            href={`#${BASE}/${lesson.id}`}
            key={i}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById(`section-${i}`)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {i + 1}. {txt(s.title)}
          </a>
        ))}
      </div>
      {lesson.sections.map((section, i) => (
        <section id={`section-${i}`} key={i} className="nuclear-theory">
          <h2>{txt(section.title)}</h2>
          <Text value={section.text} />
        </section>
      ))}
      {lesson.formulas.length > 0 && (
        <section className="nuclear-formula-box">
          <h2>{t("Keep these relationships", "Главные зависимости")}</h2>
          {lesson.formulas.map((f) => (
            <p key={f} className="nuclear-formula">
              {f}
            </p>
          ))}
        </section>
      )}
      {lesson.visual && <VisualLab kind={lesson.visual} key={lesson.id} />}
      <section>
        <h2>{t("Worked examples", "Разобранные примеры")}</h2>
        {lesson.examples.map((ex, i) => (
          <div className="nuclear-example" key={i}>
            <h3>
              {t("Example", "Пример")} {i + 1}
            </h3>
            <Text value={ex.question} />
            <ol>
              {ex.steps.map((step, j) => (
                <li key={j}>{txt(step)}</li>
              ))}
            </ol>
          </div>
        ))}
      </section>
      <section className="nuclear-pitfalls">
        <h2>{t("Mistakes to catch", "Проверь эти ошибки")}</h2>
        <ul>
          {lesson.pitfalls.map((p, i) => (
            <li key={i}>{txt(p)}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{t("Try without the worked examples", "Реши самостоятельно")}</h2>
        {questions
          .filter((q) => q.topic === lesson.id)
          .map((q, i) => (
            <QuestionCard
              key={q.id}
              question={q}
              store={store}
              number={i + 1}
            />
          ))}
      </section>
      <div className="nuclear-lesson-end">
        <button
          aria-pressed={store.state.completed.includes(lesson.id)}
          onClick={() => store.complete(lesson.id)}
        >
          <Check size={18} />
          {store.state.completed.includes(lesson.id)
            ? t("Reviewed · undo tick", "Проверено · снять отметку")
            : t("I checked my understanding", "Я проверил понимание")}
        </button>
        {index < 11 && (
          <Link
            className="nuclear-primary"
            to={`${BASE}/${lessons[index + 1].id}`}
          >
            {t("Next topic", "Следующая тема")} <ArrowRight size={17} />
          </Link>
        )}
      </div>
    </article>
  );
}
function Practice({ store }: { store: Store }) {
  const { t, txt } = useText();
  const [topic, setTopic] = useState("all");
  const [strand, setStrand] = useState("all");
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const filtered = questions.filter(
    (q) =>
      (topic === "all" || q.topic === topic) &&
      (strand === "all" || q.strand === strand) &&
      (difficulty === "all" || q.difficulty === difficulty) &&
      (q.prompt.en + " " + q.prompt.ru)
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  return (
    <>
      <p className="nuclear-eyebrow">CRITERION A · QUESTION BANK</p>
      <h1>
        {t("Practice, one skill at a time", "Практика по отдельным навыкам")}
      </h1>
      <p className="nuclear-lead">
        {t(
          "Write a solution, use a hint if needed, then compare with the marking points. The challenge label describes difficulty, not a guaranteed IB band.",
          "Запиши решение, при необходимости открой подсказку, затем сравни с пунктами оценивания. Уровень сложности не означает гарантированный балл IB.",
        )}
      </p>
      <div className="nuclear-filters">
        <label>
          {t("Topic", "Тема")}
          <select
            aria-label={t("Topic", "Тема")}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="all">{t("All topics", "Все темы")}</option>
            {lessons.map((l) => (
              <option key={l.id} value={l.id}>
                {txt(l.title)}
              </option>
            ))}
          </select>
        </label>
        <label>
          {t("Skill", "Навык")}
          <select
            aria-label={t("Skill", "Навык")}
            value={strand}
            onChange={(e) => setStrand(e.target.value)}
          >
            <option value="all">{t("All strands", "Все компоненты")}</option>
            {["A(i)", "A(ii)", "A(iii)"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          {t("Difficulty", "Сложность")}
          <select
            aria-label={t("Difficulty", "Сложность")}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="all">{t("All levels", "Все уровни")}</option>
            <option value="foundation">{t("Foundation", "Основа")}</option>
            <option value="application">
              {t("Application", "Применение")}
            </option>
            <option value="challenge">{t("Challenge", "Усложнение")}</option>
          </select>
        </label>
        <label>
          {t("Search questions", "Поиск задач")}
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <p role="status">
        {filtered.length} / 48 {t("questions", "задач")}
      </p>
      {filtered.map((q, i) => (
        <QuestionCard key={q.id} question={q} store={store} number={i + 1} />
      ))}
      {filtered.length === 0 && (
        <p>
          {t(
            "No matches. Change the filters or search.",
            "Совпадений нет. Измени фильтры или поиск.",
          )}
        </p>
      )}
    </>
  );
}
function PaperPage({ store, id }: { store: Store; id: string }) {
  const { t, txt } = useText();
  const paper = papers.find((p) => p.id === id)!;
  const [left, setLeft] = useState(paper.minutes * 60);
  const [deadline, setDeadline] = useState<number | null>(null);
  const [review, setReview] = useState(false);
  const [marks, setMarks] = useState<Record<string, number>>({});
  useEffect(() => {
    if (deadline === null) return;
    const update = () => {
      const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setLeft(remaining);
      if (remaining === 0) setDeadline(null);
    };
    update();
    const timer = window.setInterval(update, 500);
    return () => clearInterval(timer);
  }, [deadline]);
  return (
    <div className="nuclear-paper">
      <p className="nuclear-eyebrow">ORIGINAL PRACTICE · CRITERION A</p>
      <h1>{txt(paper.title)}</h1>
      <p className="nuclear-lead">
        {t(
          "8 questions · 40 marks · 50 minutes suggested. Calculator allowed for this practice. Show working, units and reasoning. The school’s time, tools and mark scheme may differ.",
          "8 задач · 40 баллов · рекомендуем 50 минут. В этой тренировке можно использовать калькулятор. Показывай действия, единицы и объяснения. Время, инструменты и оценивание школы могут отличаться.",
        )}
      </p>
      <div className="nuclear-note">
        <p>
          {t(
            "This is an independent practice paper. Tick the points you earned after checking; there is no automatic conversion to an IB 1–8 level. A teacher judges criterion achievement using the school rubric.",
            "Это самостоятельная тренировка. После проверки отмечай выполненные пункты; автоматического перевода в уровень IB 1–8 нет. Достижение критерия оценивает учитель по школьным дескрипторам.",
          )}
        </p>
      </div>
      <div className="nuclear-timer">
        <span aria-label={t("Time remaining", "Осталось времени")}>
          {Math.floor(left / 60)
            .toString()
            .padStart(2, "0")}
          :{(left % 60).toString().padStart(2, "0")}
        </span>
        <div className="nuclear-actions">
          {!review && (
            <button
              disabled={left === 0}
              onClick={() =>
                setDeadline(deadline === null ? Date.now() + left * 1000 : null)
              }
            >
              {deadline === null
                ? t("Start / resume timer", "Запустить / продолжить")
                : t("Pause timer", "Пауза")}
            </button>
          )}
          <button
            onClick={() => {
              setDeadline(null);
              setReview((v) => !v);
            }}
          >
            {review
              ? t("Hide marking", "Скрыть разбор")
              : t("Finish and review", "Завершить и проверить")}
          </button>
          <button
            onClick={() => {
              setDeadline(null);
              setLeft(paper.minutes * 60);
              setReview(false);
            }}
          >
            {t("Reset timer", "Сбросить таймер")}
          </button>
          <button onClick={() => window.print()}>
            <Printer size={17} />
            {t("Print", "Печать")}
          </button>
        </div>
        {left === 0 && (
          <p role="status">
            {t(
              "Time is up. Your answers are kept; open the marking when ready.",
              "Время вышло. Ответы сохранены; открой разбор, когда будешь готов.",
            )}
          </p>
        )}
      </div>
      {review && (
        <p className="nuclear-score" role="status">
          {t("Self-assessed practice score", "Баллы по самопроверке")}:{" "}
          {Object.values(marks).reduce((a, b) => a + b, 0)} / 40
        </p>
      )}
      {paper.questions.map((q, i) => (
        <QuestionCard
          key={q.id}
          question={q}
          store={store}
          number={i + 1}
          exam
          review={review}
          onMark={(v) => setMarks((m) => ({ ...m, [q.id]: v }))}
        />
      ))}
      <p className="nuclear-caption">
        {t(
          "Answers persist in this browser. Timer and self-mark ticks reset when you leave or reload this page. Reset timer does not erase answers.",
          "Ответы остаются в этом браузере. Таймер и отметки баллов сбрасываются при уходе или перезагрузке. Сброс таймера не стирает ответы.",
        )}
      </p>
    </div>
  );
}
function Reference() {
  const { t, txt } = useText();
  return (
    <>
      <p className="nuclear-eyebrow">QUICK REFERENCE</p>
      <h1>
        {t(
          "Formulas, language and criterion A",
          "Формулы, термины и критерий A",
        )}
      </h1>
      <section className="nuclear-note">
        <h2>
          {t("What a strong answer contains", "Из чего состоит сильный ответ")}
        </h2>
        <ol>
          <li>
            {t(
              "A(i) — accurate definitions and linked scientific explanations.",
              "A(i) — точные определения и связанные физические объяснения.",
            )}
          </li>
          <li>
            {t(
              "A(ii) — choose a suitable relationship, apply it even in a new context, and check units and reasonableness.",
              "A(ii) — выбери подходящую зависимость, примени её в новом контексте, проверь единицы и смысл.",
            )}
          </li>
          <li>
            {t(
              "A(iii) — cite the relevant values, explain the mechanism, judge the claim and name a limitation.",
              "A(iii) — приведи нужные значения, объясни механизм, оцени утверждение и назови ограничение.",
            )}
          </li>
        </ol>
        <p>
          {t(
            "The practice-point totals here are learning feedback. They are not the official eight-level criterion rubric and do not predict the school’s grade.",
            "Баллы за пункты здесь служат обратной связью. Это не официальная восьмиуровневая шкала и не прогноз школьной оценки.",
          )}
        </p>
      </section>
      <section className="nuclear-reference-section">
        <h2>{t("Relationships and units", "Зависимости и единицы")}</h2>
        <div className="nuclear-reference-grid">
          {lessons
            .filter((l) => l.formulas.length)
            .map((l) => (
              <div className="nuclear-formula-box" key={l.id}>
                <Link to={`${BASE}/${l.id}`}>
                  <h3>{txt(l.title)}</h3>
                </Link>
                {l.formulas.map((f) => (
                  <p key={f} className="nuclear-formula">
                    {f}
                  </p>
                ))}
              </div>
            ))}
        </div>
      </section>
      <section className="nuclear-reference-section">
        <h2>{t("Radiation comparison", "Сравнение излучений")}</h2>
        <div className="nuclear-table-wrap">
          <table>
            <thead>
              <tr>
                <th>{t("Type", "Вид")}</th>
                <th>{t("Nature / charge", "Природа / заряд")}</th>
                <th>{t("Typical penetration", "Типичное проникновение")}</th>
                <th>{t("Ionisation", "Ионизация")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>α</td>
                <td>{t("2p + 2n; +2", "2p + 2n; +2")}</td>
                <td>
                  {t(
                    "Stopped by paper; a few cm in air",
                    "Задерживается бумагой; несколько см в воздухе",
                  )}
                </td>
                <td>
                  {t("Dense local ionisation", "Сильная местная ионизация")}
                </td>
              </tr>
              <tr>
                <td>β⁻</td>
                <td>{t("Electron; −1", "Электрон; −1")}</td>
                <td>
                  {t(
                    "Typically stopped by mm of aluminium/plastic",
                    "Обычно задерживается мм алюминия/пластика",
                  )}
                </td>
                <td>
                  {t("Less dense than alpha", "Менее плотная, чем у альфа")}
                </td>
              </tr>
              <tr>
                <td>γ</td>
                <td>{t("Photon; 0", "Фотон; 0")}</td>
                <td>
                  {t(
                    "Attenuated by thick lead/concrete",
                    "Ослабляется толстым свинцом/бетоном",
                  )}
                </td>
                <td>
                  {t(
                    "Less ionising per path length; deeply penetrating",
                    "Меньше ионизации на единицу пути; глубоко проникает",
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="nuclear-caption">
          {t(
            "Energy and material affect ranges. Danger depends on dose and exposure route, not one ranking.",
            "Энергия и материал влияют на пробег. Опасность зависит от дозы и пути воздействия, не от одного рейтинга.",
          )}
        </p>
      </section>
      <section className="nuclear-reference-section">
        <h2>
          {t("Command terms: how to respond", "Командные слова: как отвечать")}
        </h2>
        {commandTerms.map(([term, en, ru]) => (
          <div className="nuclear-term" key={term}>
            <strong>{term}</strong>
            <p>{t(en, ru)}</p>
          </div>
        ))}
      </section>
      <section className="nuclear-reference-section">
        <h2>{t("English ↔ Russian glossary", "Англо-русский словарь")}</h2>
        <div className="nuclear-glossary">
          {glossary.map(([en, ru, defEn, defRu]) => (
            <div key={en}>
              <strong>
                {en} · {ru}
              </strong>
              <p>{t(defEn, defRu)}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="nuclear-reference-section">
        <h2>{t("Sources and scope", "Источники и границы")}</h2>
        <p>
          {t(
            "Topic selection comes from the supplied PiXL overview photo (29 September 2026). All explanations, examples, diagrams and questions in this pack were newly authored. The photograph and third-party question papers are not republished. Public references below were checked on 29 September 2026.",
            "Темы взяты из переданного фото обзора PiXL (29 сентября 2026). Объяснения, примеры, схемы и задачи этого раздела написаны заново. Фотография и чужие экзаменационные варианты не переопубликованы. Публичные источники сверены 29 сентября 2026.",
          )}
        </p>
        <ul>
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.title} ↗
              </a>
              <p>{txt(s.note)}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
export function PhysicsSeptemberModule() {
  const store = useStudyStore();
  const { t, txt } = useText();
  const location = useLocation();
  const navigate = useNavigate();
  const nav = [
    { path: BASE, title: t("Overview", "Обзор") },
    { path: `${BASE}/practice`, title: t("Question bank", "Банк задач") },
    { path: `${BASE}/paper-1`, title: t("Paper 1", "Вариант 1") },
    { path: `${BASE}/paper-2`, title: t("Paper 2", "Вариант 2") },
    {
      path: `${BASE}/reference`,
      title: t("Formulas & guide", "Формулы и памятка"),
    },
  ];
  useEffect(() => {
    document.title = t(
      "Physics · September 2026 | MYP Revision",
      "Физика · сентябрь 2026 | MYP Revision",
    );
    return () => {
      document.title = "MYP Revision Hub";
    };
  }, [t("en", "ru")]);
  return (
    <div className="nuclear-course">
      <div className="nuclear-course-top">
        <Link to="/">← {t("Study hub", "Учебный хаб")}</Link>
        <span>
          {t(
            "September physics · a separate assessment pack",
            "Сентябрьская физика · отдельная подготовка",
          )}
        </span>
      </div>
      <nav
        className="nuclear-topnav"
        aria-label={t("Physics preparation", "Подготовка по физике")}
      >
        {nav.map((n) => (
          <NavLink
            key={n.path}
            to={n.path}
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {n.title}
          </NavLink>
        ))}
      </nav>
      <div className="nuclear-layout">
        <aside className="nuclear-sidebar">
          <p className="nuclear-eyebrow">ATOMIC STRUCTURE</p>
          {lessons.map((l, i) => (
            <NavLink
              key={l.id}
              to={`${BASE}/${l.id}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {txt(l.title)}
              {store.state.completed.includes(l.id) && <Check size={13} />}
            </NavLink>
          ))}
        </aside>
        <main className="nuclear-main">
          <label className="nuclear-mobile-select">
            {t("Jump to a topic", "Перейти к теме")}
            <select
              value={
                lessons.some((l) => location.pathname === `${BASE}/${l.id}`)
                  ? location.pathname
                  : BASE
              }
              onChange={(e) => navigate(e.target.value)}
            >
              <option value={BASE}>{t("All topics", "Все темы")}</option>
              {lessons.map((l, i) => (
                <option key={l.id} value={`${BASE}/${l.id}`}>
                  {i + 1}. {txt(l.title)}
                </option>
              ))}
            </select>
          </label>
          {store.warning && (
            <p role="status" className="nuclear-note">
              {t(
                "Browser storage is unavailable. Your current answers remain on this page but will not survive closing it.",
                "Хранилище браузера недоступно. Ответы остаются на странице, но не сохранятся после закрытия.",
              )}
            </p>
          )}
          <Routes>
            <Route index element={<Overview store={store} />} />
            <Route path="practice" element={<Practice store={store} />} />
            <Route
              path="paper-1"
              element={<PaperPage key="paper-1" id="paper-1" store={store} />}
            />
            <Route
              path="paper-2"
              element={<PaperPage key="paper-2" id="paper-2" store={store} />}
            />
            <Route path="reference" element={<Reference />} />
            <Route path=":topicId" element={<LessonPage store={store} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
