# ngx-spotlight

`@omnedia/ngx-spotlight` is an Angular library that creates a spotlight effect using SVG animations. The component highlights sections of your page when they enter the viewport, with customizable spotlight colors and optional animations. This is ideal for drawing attention to important content as users scroll through your Angular application.

## Features

- Customizable spotlight color for highlighting content.
- Animation that triggers when the spotlight enters the viewport.
- Lightweight and easy to integrate as a standalone component.
- Flexible styling via custom CSS classes and inline styles.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-spotlight
```

## Usage

Import the `NgxSpotlightComponent` in your Angular module or component:

```typescript
import { NgxSpotlightComponent } from '@omnedia/ngx-spotlight';

@Component({
  ...
  imports: [
    ...
    NgxSpotlightComponent,
  ],
  ...
})
```

Use the component in your template:

```html
<om-spotlight
  [spotlightColor]="'#ffcc00'"
  [animation]="true"
  styleClass="custom-spotlight"
>
  <h1>Highlighted Content</h1>
</om-spotlight>
```

## How It Works

- Spotlight Color: The spotlightColor input allows you to set the color of the spotlight effect, giving you full control over its visual style.
- Animation on Viewport Entry: The spotlight animation is triggered when the component enters the viewport using the IntersectionObserver API. Enable or disable this behavior with the animation input.
- Global and Custom Styling: The .om-spotlight container can be styled globally or with a custom styleClass. The spotlight effect itself is applied through SVG elements and animations.

## API

```html
<om-spotlight
  [spotlightColor]="spotlightColor"
  [animation]="animation"
  styleClass="your-custom-class"
>
  <ng-content></ng-content>
</om-spotlight>
```

- `spotlightColor` (optional): The color of the spotlight effect. Accepts any valid CSS color value (e.g., '#ffcc00', '#00ffcc').
- `animation` (optional): A boolean to enable animation when the spotlight enters the viewport. Defaults to false.
- `styleClass` (optional): A custom CSS class to apply to the .om-spotlight container for additional styling.

## Example

```html
<om-spotlight [spotlightColor]="'#ff5733'" [animation]="true" styleClass="spotlight-container">
  <div class="highlighted-content">
    <p>This content is highlighted by the spotlight effect</p>
  </div>
</om-spotlight>
```

This will create a spotlight effect with a reddish-orange color that animates when the content enters the viewport.

## Styling
- The Color can be styled by the API Input or via the styleClass in a global css file.
- To change the position where the spotlight is shining use the styleClass and move the spotlight around.

### Custom Spotlight Styling Example

In this example, the spotlight is styled with custom colors via css:

```html
<om-spotlight styleClass="custom-spotlight">
  <div class="content">
    <p>Spotlight Content Here</p>
  </div>
</om-spotlight>
```

```css
/* Global Style */
.custom-spotlight {
  --om-spotlight-color: #ffcc00;
}

/* Component Style */
.content {
  color: white;
  font-size: 1.5rem;
  position: relative;
  z-index: 2;
}
```

This example applies a yellow spotlight color.

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.