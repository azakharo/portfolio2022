export interface ILanguage {
  code: string;
  label: string;
  // The icon name can't be arbitrary. It's sent to the backend when
  // user has changed the language.
  icon: string;
}
