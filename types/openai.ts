export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  O3_mini = 'o3-mini',
  O1 = 'o1',
  GPT_4_o = 'gpt-4o',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4_o;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.O3_mini]: {
    id: OpenAIModelID.O3_mini,
    name: 'o3-mini',
    maxLength: 200000,
    tokenLimit: 100000,
  },
  [OpenAIModelID.O1]: {
    id: OpenAIModelID.O1,
    name: 'o1',
    maxLength: 200000,
    tokenLimit: 100000,
  },
  [OpenAIModelID.GPT_4_o]: {
    id: OpenAIModelID.GPT_4_o,
    name: 'GPT-4o',
    maxLength: 128000,
    tokenLimit: 16384,
  },
};
