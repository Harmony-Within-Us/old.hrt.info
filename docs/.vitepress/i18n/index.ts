import messageEn from './strings/en.json';
import messageDe from './strings/de.json';
import messageFr from './strings/fr.json';
import messageIt from './strings/it.json';
import messageJa from './strings/ja.json';
import messageKo from './strings/ko.json';
import messageNl from './strings/nl.json';
import messagePl from './strings/pl.json';
import messageRu from './strings/ru.json';
import messageZh from './strings/zh.json';
import messageDebug from './strings/debug.json';
import debug from '../config/locales/debug.mts';


type Indexable<T = any> = {
  [key: string]: T;
};

export const tr = (locale: string, key: string): string => {
  const messages: Indexable = {
    en: messageEn,
    de: messageDe,
    fr: messageFr,
    it: messageIt,
    ja: messageJa,
    ko: messageKo,
    nl: messageNl,
    pl: messagePl,
    ru: messageRu,
    zh: messageZh,
	debug: messageDebug,
  };

  // Convert the locale to lowercase for case-insensitive matching
  const lowerLocale = locale.toLowerCase();

  // Use the lowercased locale to get the corresponding messages
  const selectedMessages = messages[lowerLocale] || messageEn;

  // Return the translation or the key itself if not found
  return (selectedMessages as Indexable)[key] || key;
};
