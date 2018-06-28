import { EngineModule } from './engine.module';

describe('EngineModule', () => {
  let engineModule: EngineModule;

  beforeEach(() => {
    engineModule = new EngineModule();
  });

  it('should create an instance', () => {
    expect(engineModule).toBeTruthy();
  });
});
