import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya16-оказ-консульт', 'Unit | Serializer | i-i-s-kursovaya16-оказ-консульт', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya16-оказ-консульт',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya16-статус',
    'transform:i-i-s-kursovaya16-тип-договора',
    'transform:i-i-s-kursovaya16-услуга',

    'model:i-i-s-kursovaya16-дир-отд-по-раб-с-кл',
    'model:i-i-s-kursovaya16-заключ-договора',
    'model:i-i-s-kursovaya16-затр-время',
    'model:i-i-s-kursovaya16-клиент',
    'model:i-i-s-kursovaya16-оказ-консульт',
    'model:i-i-s-kursovaya16-перечень-услуг',
    'model:i-i-s-kursovaya16-расторж-договора',
    'model:i-i-s-kursovaya16-расчет-ост-врем',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
