compass_config do |config|
  config.output_style = :compact
end

activate :livereload
activate :compass
activate :slim
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do
  activate :minify_css
  activate :minify_javascript
end

after_configuration do
  sprockets.append_path File.join(File.expand_path(File.dirname(__FILE__)), 'source', 'bower_components')
end
