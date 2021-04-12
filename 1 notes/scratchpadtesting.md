> I recommend using a code formatter (like [Prettier](https://prettier.io/)) since I got confused reading the indentation in your main.ts file.

- [x]  Done!

> https://github.com/gitobsidiantutorial/obsidian-tabs/blob/4839fce6eadda8332241d1f8c325aa79008f6816/src/main.ts#L53 I think activeLeaf can be null, so I recommend adding a check for that at the start of this function.

Is checking for truthiness with an if () statement sufficient? https://github.com/gitobsidiantutorial/obsidian-tabs/blob/f6a855079cfda6895ec5dec55fc5cd8bd3d7caa1/src/main.ts#L112

> This pattern for saving and loading settings will make it easier in the future when you need to add new settings. You'll be able to merge existing settings with new options without changing anything here.

- [x] Done

> [https://github.com/gitobsidiantutorial/obsidian-tabs/blob/4839fce6eadda8332241d1f8c325aa79008f6816/src/main.ts#L65](https://github.com/gitobsidiantutorial/obsidian-tabs/blob/4839fce6eadda8332241d1f8c325aa79008f6816/src/main.ts#L65) instead of using `var` you can use a ternary for this lines of code:

This was an older workaround to count the number of panes open in a split, with an inaccurate and hacky way to support having multiple tabbed interfaces at the same time. 