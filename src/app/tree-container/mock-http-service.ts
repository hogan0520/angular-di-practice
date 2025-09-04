import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Channel, Well, Wellbore } from './model';

export class InMemWellService implements InMemoryDbService {
  createDb() {
    const wells: Well[] = [
      {
        id: 'well-1',
        name: 'Well 1',
        wellbores: ['wellbore-1-1', 'wellbore-1-2'],
        channels: ['channel-1-1', 'channel-1-2', 'channel-1-3'],
      },
      {
        id: 'well-2',
        name: 'Well 2',
        wellbores: ['wellbore-2-1'],
        channels: ['channel-2-1'],
      },
    ];
    const wellbores: Wellbore[] = [
      {
        id: 'wellbore-1-1',
        name: 'Wellbore 1 of Well 1',
        channels: ['channel-1-1-1'],
        status: 'active',
      },
      {
        id: 'wellbore-1-2',
        name: 'Wellbore 2 of Well 1',
        channels: [],
        status: 'normal',
      },
      {
        id: 'wellbore-2-1',
        name: 'Wellbore 1 of Well 2',
        channels: ['channel-2-1-1'],
        status: 'pending',
      },
    ];
    const channels: Channel[] = [
      {
        id: 'channel-1-1',
        name: 'Channel 1 of Well 1',
        type: 'depth',
      },
      {
        id: 'channel-1-2',
        name: 'Channel 2 of Well 1',
        type: 'time',
      },
      {
        id: 'channel-1-3',
        name: 'Channel 3 of Well 1',
        type: 'pressure',
      },
      {
        id: 'channel-2-1',
        name: 'Channel 1 of Well 2',
        type: 'depth',
      },
      {
        id: 'channel-1-1-1',
        name: 'Channel 1 of Well-1/Wellbore-1',
        type: 'width',
      },
      {
        id: 'channel-2-1-1',
        name: 'Channel 1 of Well-2/Wellbore-1',
        type: 'width',
      },
    ];
    return { wells, wellbores, channels };
  }
}
