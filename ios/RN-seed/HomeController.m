//
//  HomeController.m
//  RN-seed
//
//  Created by carefree on 2019/9/12.
//  Copyright © 2019 qingshan. All rights reserved.
//

#import "HomeController.h"
#import <React/RCTRootView.h>
#import "MainController.h"

@interface HomeController ()

@end

@implementation HomeController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.view.backgroundColor = UIColor.whiteColor;
    
    UIButton *button = [UIButton buttonWithType:UIButtonTypeSystem];
    [button setTitle:@"go" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(jump) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
    button.frame = (CGRect){self.view.center, 50, 30};
}

- (void)jump {
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                moduleName: @"reactNativeSeed"
                         initialProperties:nil
                             launchOptions: nil];
    
    MainController *main = [[MainController alloc] init];
    main.view = rootView;
    
    [self.navigationController pushViewController:main animated:YES];
}

@end
