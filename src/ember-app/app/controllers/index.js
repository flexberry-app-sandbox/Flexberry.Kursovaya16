import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya16.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya16.title'),
          children: [{
            link: 'i-i-s-kursovaya16-затр-время-l',
            caption: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-затр-время-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-kursovaya16-расторж-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-расторж-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-расторж-договора-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kursovaya16-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-дир-отд-по-раб-с-кл-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya16-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-клиент-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya16-перечень-услуг-l',
            caption: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-перечень-услуг-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-перечень-услуг-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-kursovaya16-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-расчет-ост-врем-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-kursovaya16-заключ-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-заключ-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya16.i-i-s-kursovaya16-заключ-договора-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})