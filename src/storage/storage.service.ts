import { Injectable, NotFoundException } from '@nestjs/common';
import { FruitStorage } from './dto/storage.dto';
import { getProperties } from 'src/decorators/property.decorator';

@Injectable()
export class StorageService {
  constructor() {
    console.log(getProperties(FruitStorage));
  }

  async findAll(model: boolean) {
    const data: FruitStorage[] = [
      {
        id: '9ad694ce-e72d-426d-a30e-d9721a93a819',
        type: 'Manzana',
        quantity: '100',
        date: new Date(),
      },
    ];

    if (data.length === 0) throw new NotFoundException('Data dont exist.');

    if (model) {
      // get dynamic model
      // const modelData = [];
      // for (const key in data[0]) {
      //   if (Object.prototype.hasOwnProperty.call(data[0], key)) {
      //     modelData.push({
      //       fieldName: key,
      //       type: typeof data[0][key],
      //     });
      //   }
      // }

      // if (Object.keys(modelData).length === 0) {
      //   throw new NotFoundException(
      //     'No se encontró información del modelo de inventario de frutas.',
      //   );
      // }
      // console.log('modelData: ', modelData);

      return {
        model: [
          { fieldName: 'id', type: 'string' },
          { fieldName: 'type', type: 'string' },
          { fieldName: 'quantity', type: 'number' },
          { fieldName: 'date', type: 'date' },
        ],
        data: {
          count: data.length,
          values: data,
        },
      };
    } else {
      return {
        data: {
          count: data.length,
          values: data,
        },
      };
    }
  }
}
