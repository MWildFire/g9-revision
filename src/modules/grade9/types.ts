export type Text = { en: string; ru: string };
export type Lesson = {
 id: string; subject: string; title: Text; scope: 'school-g9' | 'supplemental';
 objective: Text; prerequisites: Text; explanation: Text; worked: Text; misconception: Text;
 model: { headers: Text[]; rows: Text[][]; caption: Text };
 practice: { id: string; prompt: Text; answer: Text }[];
 links: {route:string; title:Text}[]; sources:string[];
};
