module.exports = {
  disableEmoji: true,
  list: ['chore', 'layout', 'docs', 'func', 'bug', 'perf', 'component', 'release', 'style', 'test'],
  types: {
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '🤖',
      value: 'chore'
    },
    layout: {
      description: 'Layout related changes',
      emoji: '📏',
      value: 'layout'
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '✏️',
      value: 'docs'
    },
    func: {
      description: 'A new feature',
      emoji: '🎸',
      value: 'func'
    },
    bug: {
      description: 'A bug fix',
      emoji: '🐛',
      value: 'bug'
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '⚡️',
      value: 'perf'
    },
    component: {
      description: 'A code change that adds or modifies a component',
      emoji: '🎛',
      value: 'component'
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹',
      value: 'release'
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '💰',
      value: 'style'
    },
    test: {
      description: 'Adding missing tests',
      emoji: '💍',
      value: 'test'
    }
  },
  messages: {
    type: 'Select the type of change that you\'re committing:',
    scope: 'Denote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Task id from Redmine. If not in RM, use Gitlab issue id.:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },
  allowCustomScopes: true
}
