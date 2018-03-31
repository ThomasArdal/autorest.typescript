import * as should from 'should';
import { AutoRestSwaggerBATXMLFlatteningService, AutoRestSwaggerBATXMLFlatteningServiceModels as models } from './generated/XmlFlattening/autoRestSwaggerBATXMLFlatteningService';

const baseUri = 'http://localhost:3000';
const testClient = new AutoRestSwaggerBATXMLFlatteningService(baseUri);

describe('typescript', function () {
  describe('XML flattening client', function() {
    it('should get a flattened XML document', async function() {
        const zoo = await testClient.xml.getZoo();
        should.exist(zoo);

        zoo.office.zookeeper.should.equal("Daniel");
        zoo.parrot.should.equal("Jeff");
        zoo.giraffes[0].should.equal("Henry");
        zoo.giraffes[1].should.equal("Clive");
        zoo.giraffes[2].should.equal("Sarah");
        zoo.octopi[0].should.equal("Teddy");
        zoo.octopi[1].should.equal("Frankie");
    });
  });
});