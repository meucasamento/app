import { 
    NavigationActions, 
    NavigationContainerComponent
} from 'react-navigation';

let navigator: NavigationContainerComponent

export function back() {
    navigator.dispatch(NavigationActions.back())
}

export function setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
    navigator = navigatorRef
}

export function navigate(routeName: string, params?: any): void {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    )
}