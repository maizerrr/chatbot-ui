import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  // GPT_4 = 'gpt-4',
  // GPT_4_T = 'gpt-4-turbo-preview'
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 48000,
    tokenLimit: 16000,
  },
  // [OpenAIModelID.GPT_4]: {
  //   id: OpenAIModelID.GPT_4,
  //   name: 'GPT-4',
  //   maxLength: 24000,
  //   tokenLimit: 8000,
  // },
  // [OpenAIModelID.GPT_4_T]: {
  //   id: OpenAIModelID.GPT_4_T,
  //   name: 'GPT-4 Turbo',
  //   maxLength: 384000,
  //   tokenLimit: 128000,
  // }
};
