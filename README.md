# vscode-abap
ABAP syntax highlighting for Visual Studio Code

Based on https://github.com/pvl/abap.tmbundle

![Screenshot](https://raw.githubusercontent.com/larshp/vscode-abap/master/img/screenshot_20191124.png)

## Customization
If you want to customize the token colors, add an `editor.tokenColorCustomizations` section to your vscode `settings.json`. The following example will change the color of operators, which have no special highlighting by default:

```json
"editor.tokenColorCustomizations": {
        "[Default Dark+]": {
            "textMateRules": [
                {
                    "scope": "keyword.operator.abap",
                    "settings": {
                        "foreground": "#d456b9"
                    }
                }
            ]
        }
    }
```

## Folding / Regions

Example region,

```abap
* #region Hello
WRITE 'test'.
* #endregion
```

this will make a foldable region, plus show up in the minimap,

![Screenshot](https://raw.githubusercontent.com/larshp/vscode-abap/master/img/region.png)