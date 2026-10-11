import data from '../../data/study-sessions.json';
import type {Text} from './content';
export type StudySession={id:string;topic:string;title:Text;minutes:number;range:number[];timing:{read:number;example:number;attempt:number;check:number};libraryIds?:string[]};
export const sessions=data as StudySession[];
export const sessionRoute=(s:StudySession)=>`/november/${s.topic}?part=${s.id}`;
