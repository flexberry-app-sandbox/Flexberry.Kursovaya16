import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya16ДирОтдПоРабСКлLForm from './forms/i-i-s-kursovaya16-дир-отд-по-раб-с-кл-l';
import IISKursovaya16ЗаключДоговораLForm from './forms/i-i-s-kursovaya16-заключ-договора-l';
import IISKursovaya16ЗатрВремяLForm from './forms/i-i-s-kursovaya16-затр-время-l';
import IISKursovaya16КлиентLForm from './forms/i-i-s-kursovaya16-клиент-l';
import IISKursovaya16ПереченьУслугLForm from './forms/i-i-s-kursovaya16-перечень-услуг-l';
import IISKursovaya16РасторжДоговораLForm from './forms/i-i-s-kursovaya16-расторж-договора-l';
import IISKursovaya16РасчетОстВремLForm from './forms/i-i-s-kursovaya16-расчет-ост-врем-l';
import IISKursovaya16ДирОтдПоРабСКлEForm from './forms/i-i-s-kursovaya16-дир-отд-по-раб-с-кл-e';
import IISKursovaya16ЗаключДоговораEForm from './forms/i-i-s-kursovaya16-заключ-договора-e';
import IISKursovaya16ЗатрВремяEForm from './forms/i-i-s-kursovaya16-затр-время-e';
import IISKursovaya16КлиентEForm from './forms/i-i-s-kursovaya16-клиент-e';
import IISKursovaya16ПереченьУслугEForm from './forms/i-i-s-kursovaya16-перечень-услуг-e';
import IISKursovaya16РасторжДоговораEForm from './forms/i-i-s-kursovaya16-расторж-договора-e';
import IISKursovaya16РасчетОстВремEForm from './forms/i-i-s-kursovaya16-расчет-ост-врем-e';
import IISKursovaya16ДирОтдПоРабСКлModel from './models/i-i-s-kursovaya16-дир-отд-по-раб-с-кл';
import IISKursovaya16ЗаключДоговораModel from './models/i-i-s-kursovaya16-заключ-договора';
import IISKursovaya16ЗатрВремяModel from './models/i-i-s-kursovaya16-затр-время';
import IISKursovaya16КлиентModel from './models/i-i-s-kursovaya16-клиент';
import IISKursovaya16ОказКонсультModel from './models/i-i-s-kursovaya16-оказ-консульт';
import IISKursovaya16ПереченьУслугModel from './models/i-i-s-kursovaya16-перечень-услуг';
import IISKursovaya16РасторжДоговораModel from './models/i-i-s-kursovaya16-расторж-договора';
import IISKursovaya16РасчетОстВремModel from './models/i-i-s-kursovaya16-расчет-ост-врем';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya16-дир-отд-по-раб-с-кл': IISKursovaya16ДирОтдПоРабСКлModel,
    'i-i-s-kursovaya16-заключ-договора': IISKursovaya16ЗаключДоговораModel,
    'i-i-s-kursovaya16-затр-время': IISKursovaya16ЗатрВремяModel,
    'i-i-s-kursovaya16-клиент': IISKursovaya16КлиентModel,
    'i-i-s-kursovaya16-оказ-консульт': IISKursovaya16ОказКонсультModel,
    'i-i-s-kursovaya16-перечень-услуг': IISKursovaya16ПереченьУслугModel,
    'i-i-s-kursovaya16-расторж-договора': IISKursovaya16РасторжДоговораModel,
    'i-i-s-kursovaya16-расчет-ост-врем': IISKursovaya16РасчетОстВремModel
  },

  'application-name': 'Kursovaya16',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya16',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya16',
          title: 'Kursovaya16'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya16: {
          caption: 'Kursovaya16',
          title: 'Kursovaya16',
          'i-i-s-kursovaya16-затр-время-l': {
            caption: 'Затр время',
            title: ''
          },
          'i-i-s-kursovaya16-расторж-договора-l': {
            caption: 'Расторж договора',
            title: ''
          },
          'i-i-s-kursovaya16-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-kursovaya16-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursovaya16-перечень-услуг-l': {
            caption: 'Перечень услуг',
            title: ''
          },
          'i-i-s-kursovaya16-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-kursovaya16-заключ-договора-l': {
            caption: 'Заключ договора',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya16-дир-отд-по-раб-с-кл-l': IISKursovaya16ДирОтдПоРабСКлLForm,
    'i-i-s-kursovaya16-заключ-договора-l': IISKursovaya16ЗаключДоговораLForm,
    'i-i-s-kursovaya16-затр-время-l': IISKursovaya16ЗатрВремяLForm,
    'i-i-s-kursovaya16-клиент-l': IISKursovaya16КлиентLForm,
    'i-i-s-kursovaya16-перечень-услуг-l': IISKursovaya16ПереченьУслугLForm,
    'i-i-s-kursovaya16-расторж-договора-l': IISKursovaya16РасторжДоговораLForm,
    'i-i-s-kursovaya16-расчет-ост-врем-l': IISKursovaya16РасчетОстВремLForm,
    'i-i-s-kursovaya16-дир-отд-по-раб-с-кл-e': IISKursovaya16ДирОтдПоРабСКлEForm,
    'i-i-s-kursovaya16-заключ-договора-e': IISKursovaya16ЗаключДоговораEForm,
    'i-i-s-kursovaya16-затр-время-e': IISKursovaya16ЗатрВремяEForm,
    'i-i-s-kursovaya16-клиент-e': IISKursovaya16КлиентEForm,
    'i-i-s-kursovaya16-перечень-услуг-e': IISKursovaya16ПереченьУслугEForm,
    'i-i-s-kursovaya16-расторж-договора-e': IISKursovaya16РасторжДоговораEForm,
    'i-i-s-kursovaya16-расчет-ост-врем-e': IISKursovaya16РасчетОстВремEForm
  },

});

export default translations;
