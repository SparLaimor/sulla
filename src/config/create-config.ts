export interface CreateConfig {
  headless?: boolean;
  devtools?: boolean;
  useChrome?: boolean;
  debug?: boolean;
  browserArgs?: string[];
  logQR?: boolean;
  refreshQR?: number;

  timeoutGrabQR: number;
  timeoutChatConnection: number;
}

export const defaultOptions: CreateConfig = {
  headless: true,
  devtools: false,
  useChrome: true,
  debug: false,
  logQR: true,
  browserArgs: [''],
  refreshQR: 30000,

  timeoutGrabQR: 60000,
  timeoutChatConnection: 70000,
};
