export interface  que_ans_obj
{
  correctOptionIndex: Array<number>,
  options: Array<string>,
  questionText: string
  type: string
  _id: string
}

export interface mainInterface {
  name: string
  questions: Array<que_ans_obj>,
  _id: string
}



