Dir.chdir(File.dirname($0)) {
  command = "sem-apply --url postgresql://stucode@localhost/stucode --password"
  puts command
  exec(command)
}