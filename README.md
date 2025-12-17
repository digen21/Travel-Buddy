# Travel App

A modern, cross-platform travel companion application built with React Native and Expo, designed to help travelers plan, organize, and enjoy their trips seamlessly across iOS, Android, and web platforms.

## Features

- Cross-platform compatibility (iOS, Android, Web)
- Intuitive trip planning and organization
- Offline-friendly design
- Modern UI with consistent experience across platforms
- Secure data storage using Expo SecureStore
- Location services integration
- Image handling capabilities
- Push notification support

## Technologies Used

- **Expo SDK 54.0.29**: Managed workflow for streamlined development
- **React Native 0.81.5**: Cross-platform mobile development
- **React 19.1.0**: Component-based UI development
- **React Navigation v7**: Navigation and routing
- **Zustand**: Lightweight state management
- **TypeScript**: Type-safe development
- **AsyncStorage**: Local data persistence
- **Expo SecureStore**: Secure data storage
- **React Native Vector Icons**: Iconography

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js (version specified in `.nvmrc`)
- npm or yarn package manager
- Expo CLI (optional, can use NPX)

For mobile device testing:
- iOS: Xcode and iOS Simulator (macOS only)
- Android: Android Studio and Android Emulator, or physical Android device

## Setup Instructions

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd travel-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```
   
   Alternatively, if you have Expo CLI installed globally:
   ```bash
   expo start
   ```

4. To run on specific platforms
   ```bash
   # For iOS (requires macOS)
   npm run ios
   
   # For Android
   npm run android
   
   # For web
   npm run web
   ```

## Project Structure

```
travel-app/
├── App.js                # Main application component
├── app.json              # Expo configuration
├── index.js              # Entry point
├── assets/               # Static assets (images, fonts, etc.)
├── components/           # Reusable UI components
├── constants/            # Shared constants and configurations
├── hooks/                # Custom React hooks
├── navigation/           # Navigation configuration
├── screens/              # Application screens/views
├── services/             # API clients and external services
├── stores/               # Global state management (Zustand)
├── utils/                # Utility functions
├── node_modules/         # Dependencies
└── README.md             # This file
```

## Available Scripts

- `npm start`: Starts the development server
- `npm run android`: Runs the app on Android device/emulator
- `npm run ios`: Runs the app on iOS simulator/device
- `npm run web`: Runs the app in web browser
- `expo start`: Alternative way to start development server

## Development Guidelines

### Component Architecture
- Use feature-based folder structure
- Keep UI components 'dumb' (presentational) where possible
- Separate logic from presentation
- Use custom hooks for reusable logic

### State Management
- Use Zustand for global state when justified
- Avoid prop drilling by using context or Zustand stores
- Keep component state local when it's not needed globally

### TypeScript Usage
- Define proper types for props and interfaces
- Use TypeScript for better code reliability
- Leverage type checking to catch errors early

## Platform Considerations

### iOS
- App supports both iPhone and iPad
- Proper handling of safe areas and notch designs
- Optimized for iOS design guidelines

### Android
- Edge-to-edge display enabled
- Material Design principles followed
- Optimized for different screen sizes and densities

### Web
- Responsive design for different screen sizes
- Progressive Web App (PWA) features
- Browser compatibility maintained

## Deployment

To build the app for production:

### For Android
```bash
expo build:android
```

### For iOS
```bash
expo build:ios
```

Or use Expo Application Services (EAS) for cloud builds:
```bash
eas build --platform android
eas build --platform ios
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please make sure your code follows the project's style and conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.