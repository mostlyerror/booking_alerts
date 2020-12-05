desc "This task is called by the Heroku scheduler add-on"
task :test_scheduled_task => :environment do
  puts "I'm being run..."
  puts "done"
end
