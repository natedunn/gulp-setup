Gulp-setup
==========

This is a personal Gulp.js setup for front-end web development. This has been created to work perfectly with my starter kit, **[Flint](https://github.com/natedunn/flint)**.

Here are a few notable tasks you can run form this setup. To view the entire list, please view the package.json file. 

Tasks with Gulp
-

To gain the full benefits of Flint's Gulp setup, please see the following example commands: 

**Compiling and optimizing tasks:**

| Command   |      Task(s)      |
|----------|:-------------:|
| `styles` | Compile all *.scss* files in src/sass directory |
| `scripts` |    Compile all vendor and plugin *.js* files   |
| `images` |    Optimize images within the src/images directory   |
| **`default`** |    Run `styles`, `scripts`, and `images` simultaneously   |

**Automated tasks:**

| Command   |      Task(s)      |
|----------|:-------------:|
| `watch` |  Run Watch for *.scss*, *.js*, and *.html* () |
| `sync` |    Run Browser-Sync    |
| `takana` |    Run Takana ([docs](https://github.com/mechio/takana))   |
| **`watcher`** | Run `takana`, `watch`, and `sync` simultaneously|
