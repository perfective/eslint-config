// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint plugin used only during development
import { flatConfigs } from 'eslint-plugin-import';

import { helpfulWarningsRules } from './helpful-warnings';
import { moduleSystemsRules } from './module-systems';
import { staticAnalysisRules } from './static-analysis';
import { styleGuideRules } from './style-guide';

export const importConfig = {
    plugins: {
        import: flatConfigs.recommended.plugins.import,
    },
    rules: {
        ...staticAnalysisRules,
        ...helpfulWarningsRules,
        ...moduleSystemsRules,
        ...styleGuideRules,
    },
};
