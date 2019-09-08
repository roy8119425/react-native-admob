require 'json'
package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = package['name']
  s.version      = package['version']
  s.summary      = package['description']
  s.homepage     = "https://github.com/roy8119425/react-native-admob"
  s.license      = package['license']
  s.author       = package['author']
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/roy8119425/react-native-admob.git", :tag => "#{s.version}" }
  s.source_files = "ios/*.{h,m}"

  s.dependency 'React'
  s.dependency 'Google-Mobile-Ads-SDK'
end
