import { tr } from '../../i18n';

export function labels(locale :string) {
  const t = (key :string) => {
    return tr(locale, `theme.${key}`)
  }
  return {
    docFooter: {
      prev: t('prev'),
      next: t('next'),
    },
    returnToTopLabel: t('returnToTop'),
    outlineTitle: t('outline'),
    darkModeSwitchLabel: t('darkModeSwitch'),
    sidebarMenuLabel: t('sidebarMenu'),
    lastUpdatedText: t('lastUpdated'),
  }
}