import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  было: DS.attr('number'),
  доступно: DS.attr('number'),
  использовано: DS.attr('number'),
  оказКонсульт: DS.hasMany('i-i-s-kursovaya16-оказ-консульт', { inverse: 'расчетОстВрем', async: false })
});

export let ValidationRules = {
  было: {
    descriptionKey: 'models.i-i-s-kursovaya16-расчет-ост-врем.validations.было.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  доступно: {
    descriptionKey: 'models.i-i-s-kursovaya16-расчет-ост-врем.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  использовано: {
    descriptionKey: 'models.i-i-s-kursovaya16-расчет-ост-врем.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оказКонсульт: {
    descriptionKey: 'models.i-i-s-kursovaya16-расчет-ост-врем.validations.оказКонсульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетОстВремE', 'i-i-s-kursovaya16-расчет-ост-врем', {
    было: attr('', { index: 0 }),
    доступно: attr('', { index: 1 }),
    использовано: attr('', { index: 2 })
  });

  modelClass.defineProjection('РасчетОстВремL', 'i-i-s-kursovaya16-расчет-ост-врем', {
    было: attr('', { index: 0 }),
    доступно: attr('', { index: 1 }),
    использовано: attr('', { index: 2 })
  });
};
