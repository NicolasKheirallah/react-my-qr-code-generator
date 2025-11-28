# QR Code Generator Web Part

## Summary

A modern, feature-rich SharePoint Framework (SPFx) web part for generating customizable QR codes directly within SharePoint. This solution provides an intuitive interface for creating QR codes with advanced styling options, multiple content types, and seamless SharePoint integration.

![QR Code Generator](./assets/qr-code-generator-preview.png)

## Key Features

- **Multiple QR Code Types**: Text/URL, WiFi, VCard, Email, SMS, and Phone
- **Advanced Styling**: Custom colors, dot patterns, corner styles, and frame options
- **Live Preview**: Real-time QR code generation with phone mockup visualization
- **Export Options**: Download as PNG or SVG, copy to clipboard, or print
- **SharePoint Integration**: Browse SharePoint files and save QR codes to document libraries
- **History Tracking**: Local storage of recently generated QR codes
- **Localization**: Support for English (en-US) and Swedish (sv-SE)
- **Accessibility**: WCAG compliant with contrast validation
- **Keyboard Shortcuts**: Ctrl+S (download), Ctrl+R (reset)

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.21.0-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

- Node.js v22.14.0 or higher (< 23.0.0)
- SharePoint Online environment
- Appropriate permissions to deploy SPFx solutions

## Solution

| Solution                   | Author(s)          |
| -------------------------- | ------------------ |
| react-my-qr-code-generator | Nicolas kheirallah |

## Version history

| Version | Date              | Comments                              |
| ------- | ----------------- | ------------------------------------- |
| 1.0.0   | November 28, 2024 | Initial release with full feature set |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

1. Clone this repository
2. Navigate to the solution folder
3. In the command line run:
   ```bash
   npm install
   gulp serve
   ```
4. Open SharePoint Workbench
5. Add the "QR Code Generator" web part to the page

## Deployment

To deploy to your SharePoint tenant:

```bash
gulp bundle --ship
gulp package-solution --ship
```

Upload the `.sppkg` file from `sharepoint/solution` to your App Catalog.

## Features

This web part demonstrates the following concepts:

### QR Code Generation

- **Content Types**: Support for Text/URL, WiFi credentials, VCard contacts, Email, SMS, and Phone numbers
- **Customization**: Extensive styling options including size, colors, error correction levels, and logo embedding
- **Advanced Styling**: Dot patterns (square, rounded, dots, extra-rounded), corner styles, and custom frames

### SharePoint Integration

- **File Picker**: Browse and select SharePoint files to generate QR codes
- **Save to SharePoint**: Upload generated QR codes directly to document libraries with custom naming
- **Context Awareness**: Automatically use current page URL option

### User Experience

- **Tabbed Interface**: Organized layout with Generate and History tabs
- **Live Preview**: Real-time QR code rendering with optional phone mockup
- **History Management**: Track and reload recently generated QR codes
- **Export Options**: Multiple export formats (PNG, SVG) and actions (copy, print)

### Technical Implementation

- **React Hooks**: Modern functional components with hooks
- **TypeScript**: Fully typed codebase for better maintainability
- **SCSS Modules**: Modular styling with CSS modules
- **PnP Controls**: Integration with @pnp/spfx-controls-react for FilePicker and FolderPicker
- **Localization**: Multi-language support with resource files
- **Accessibility**: WCAG 2.1 compliant with contrast validation

## Configuration

The web part includes the following configurable properties:

- **Title**: Editable web part title
- **Description**: Web part description (configurable in property pane)

## Dependencies

### Key Libraries

- `qr-code-styling`: Advanced QR code generation with styling options
- `@pnp/spfx-controls-react`: Reusable SPFx controls (FilePicker, FolderPicker)
- `@fluentui/react`: Microsoft Fluent UI components
- `file-saver`: File download functionality
- `@microsoft/microsoft-graph-client`: Microsoft Graph API integration

## Browser Support

- Microsoft Edge (Chromium)
- Google Chrome
- Mozilla Firefox
- Safari

## Known Issues

None at this time.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft Teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
- [PnP SPFx Controls](https://pnp.github.io/sp-dev-fx-controls-react/) - Reusable React controls for SharePoint Framework
- [QR Code Styling Library](https://github.com/kozakdenys/qr-code-styling) - Advanced QR code generation

## License

MIT

---

<img src="https://m365-visitor-stats.azurewebsites.net/sp-dev-fx-webparts/samples/react-my-qr-code-generator" />
