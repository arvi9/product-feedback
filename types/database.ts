export type DBUserRole = 'user' | 'admin';
export interface DBUser {
  id: string;
  createdAt: Date;
  lastLogin: Date;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  picture: string;
  role: DBUserRole;
}

export type DBSuggestionStatus = 'suggestion' | 'planned' | 'in-progress' | 'live';
export interface DBSuggestion {
  id: string;
  createdAt: Date;
  title: string;
  slug: string;
  description: string;
  status: DBSuggestionStatus;
  userId: string;
  categoryId: string;
}

export type DBSuggestionCategories = 'feature' | 'ui' | 'ux' | 'enhancemenet' | 'bug';
export type DBSuggestionCategoryDisplay = 'Feature' | 'UI' | 'UX' | 'Enhancemenet' | 'Bug';
export interface DBSuggestionCategory {
  id: string;
  category: DBSuggestionCategories;
  display: DBSuggestionCategoryDisplay;
}
