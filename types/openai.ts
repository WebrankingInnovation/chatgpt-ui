export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo-0125',
  GPT_3_5_16_k = 'gpt-3.5-turbo-16k',
  GPT_4_o = 'gpt-4o',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4_o;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_16_k]: {
    id: OpenAIModelID.GPT_3_5_16_k,
    name: 'GPT-3.5-16k',
    maxLength: 48000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_4_o]: {
    id: OpenAIModelID.GPT_4_o,
    name: 'GPT-4o',
    maxLength: 24000,
    tokenLimit: 8000,
  },
};
