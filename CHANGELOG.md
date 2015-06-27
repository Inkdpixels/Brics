# Change Log

## 1.3.2
**Implemented enhancements:**
- Added a shorthand function to  the `$brand-colors` Sass map.
- The target color for the `.btn--invert` modifier is now the `$base-text-color`.

## 1.3.1
**Implemented enhancements:**
- Reset the bottom margin for each last child in the `.media__content` and `.flag__content` wrapper.

**Fixed issues:**
- Fixed the unit addition in the rs() function while using ruby Sass.

## 1.3.0
**Implemented enhancements:**
- Added a media Molecule
- Added a flexible embeds Molecule
- Added a flag Molecule

## 1.2.0
**Implemented enhancements:**
- Added a duration argument for each predefined CSS Animation mixin
- Added a webFont mixin for centralised handling of different font-families.
- Generate the media-query specific utility widths only if a classNameShortHand was provided in the mq declaration.

**Fixed issues:**
- Fixed the CSS animation name reference for the u-aniScaledUpFadeIn class/mixin.

## 1.1.1
**Fixed issues:**
- Removed all pointer events if the u-aniFlyUpOut @mixin was applied

## 1.1.0
**Implemented enhancements:**
- Added a consistent transition duration variable.
- Added a new spinner molecule and Pulsate CSS Animation.

**Breaking changes:**
- All display utility classes have an 'is' prefix to create a clear reference to the state of the class.

**Fixed issues:**
- Fixed the compatibility with Node-Sass 3.0.0.
- Fixed a compile error with Ruby-Sass while using the placeholder @mixin.
