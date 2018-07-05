import { Config.JsonModule } from './config.json.module';

describe('Config.JsonModule', () => {
  let configJsonModule: Config.JsonModule;

  beforeEach(() => {
    configJsonModule = new Config.JsonModule();
  });

  it('should create an instance', () => {
    expect(configJsonModule).toBeTruthy();
  });
});
