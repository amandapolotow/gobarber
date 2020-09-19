import IMailTemplateProvider from '../models/IMailTemplateProvider';
import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({ file }: IParseMailTemplateDTO): Promise<string> {
    return file;
  }
}

export default FakeMailTemplateProvider;
