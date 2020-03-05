import { 
    NavigationActions, 
    NavigationContainerComponent
} from 'react-navigation';

let navigator: NavigationContainerComponent

type Routes = "App" | "Auth" | "NewGuest"

export function back() {
    navigator.dispatch(NavigationActions.back())
}

export function setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
    navigator = navigatorRef
}

export function navigateTo(routeName: Routes, params?: any): void {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    )
}