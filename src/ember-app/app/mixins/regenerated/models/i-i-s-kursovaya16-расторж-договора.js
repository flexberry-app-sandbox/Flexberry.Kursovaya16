import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-kursovaya16-статус'),
  empty: DS.belongsTo('i-i-s-kursovaya16-заключ-договора', { inverse: null, async: false }),
  дирОтдПоРабСКл: DS.belongsTo('i-i-s-kursovaya16-дир-отд-по-раб-с-кл', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-kursovaya16-клиент', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya16-расторж-договора.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kursovaya16-расторж-договора.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-kursovaya16-расторж-договора.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  empty: {
    descriptionKey: 'models.i-i-s-kursovaya16-расторж-договора.validations.empty.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  дирОтдПоРабСКл: {
    descriptionKey: 'models.i-i-s-kursovaya16-расторж-договора.validations.дирОтдПоРабСКл.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya16-расторж-договора.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасторжДоговораE', 'i-i-s-kursovaya16-расторж-договора', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    дирОтдПоРабСКл: belongsTo('i-i-s-kursovaya16-дир-отд-по-раб-с-кл', '', {
      фамилия: attr('', { index: 4 })
    }, { index: 3 }),
    клиент: belongsTo('i-i-s-kursovaya16-клиент', '', {
      фамилия: attr('', { index: 6 })
    }, { index: 5 })
  });

  modelClass.defineProjection('РасторжДоговораL', 'i-i-s-kursovaya16-расторж-договора', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    дирОтдПоРабСКл: belongsTo('i-i-s-kursovaya16-дир-отд-по-раб-с-кл', '', {
      фамилия: attr('', { index: 4 })
    }, { index: 3 }),
    клиент: belongsTo('i-i-s-kursovaya16-клиент', '', {
      фамилия: attr('', { index: 6 })
    }, { index: 5 })
  });
};
