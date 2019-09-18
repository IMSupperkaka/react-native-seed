//
//  AppDelegate.m
//  VMovier
//
//  Created by carefree on 2019/9/18.
//  Copyright © 2019 qingshan. All rights reserved.
//

#import "AppDelegate.h"
#import <React/RCTRootView.h>
#import <React/RCTDevLoadingView.h>

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
    NSURL *bundleUrl = [NSURL URLWithString:@"http://192.168.2.51:8081/index.bundle?platform=ios"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:bundleUrl moduleName:@"reactNativeSeed" initialProperties:nil launchOptions:nil];
    
    self.window = [[UIWindow alloc] initWithFrame:UIScreen.mainScreen.bounds];
    UIViewController *root = [[UIViewController alloc] init];
    root.view = rootView;
    self.window.rootViewController = root;
    [self.window makeKeyAndVisible];
    
    //避免白屏闪现，保持启动屏显示
    UIView *launchScreenView = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil].instantiateInitialViewController.view;
    launchScreenView.frame = self.window.bounds;
    rootView.loadingView = launchScreenView;
    //关闭绿色log提示
    [RCTDevLoadingView setEnabled:NO];
    
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
