import { config } from '@vue/test-utils';
import { vi } from 'vitest';

config.global.mocks = {
  $t: (msg: any) => msg,
};

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));
