require "#{Rails.root}/lib/syscall"

desc "Scrape AdCo Inmate Search Website"

task :scrape => :environment do
  # create scrape record
  # loop over alpha array
  # call node.js script, passing chars to scrape
  # save data to scrape record
  
  
  result = syscall "node lib/scraper.js"
  if result 
    arr = JSON.parse(result)
    puts arr
  end
end
