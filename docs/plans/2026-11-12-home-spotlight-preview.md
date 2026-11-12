# Homepage compact research and Latest news

**Goal:** Publish the approved homepage with a compact Latest announcement in the hero and six research cards in three columns on desktop.

**Implementation:** Keep the static React/Babel setup and bilingual content. The hero reads the first (newest) entry in `window.NEWS`; its optional bilingual `headline` supplies short keywords. News body text is the fallback, shortened to a sentence and at most 80 characters. The date comes from the same entry, and Read news navigates to News. The separate pale feature card was rejected and removed.

**News updates:** Keep `NEWS` newest first, add brief `headline.en` and `headline.zh` keywords to each announcement, and maintain the existing `I18N` news body translations. No separate homepage announcement needs updating.

**Validation:** Check automatic headline selection, translation/body fallback, length limits, and empty News with the Node tests. Check English/Chinese, desktop/mobile layout, and News navigation in the browser. The Research page keeps its complete descriptions and the approved 04 Alternative Protein / 05 AI for Science ordering.
