#Implicitly

# class Father
# 	attr_accessor :last_name
	
# 	def initialize(last_name)
# 		@last_name = last_name
# 	end
	
# 	def last_name
# 		puts "Your last name is #{@last_name.capitalize}."
# 	end
# end

# class Daughter < Father
# end

# last_name = "Dirks"
# dad = Father.new(last_name)
# dani = Daughter.new(last_name)
# dad.last_name
# dani.last_name

# Override Explicitly

# class Father
# 	attr_accessor :last_name
	
# 	def initialize(last_name)
# 		@last_name = last_name
# 	end
	
# 	def last_name
# 		puts "Your last name is #{@last_name.capitalize}."
# 	end

	
# end

# class Daughter < Father

# 	def last_name
# 		@last_name = "K"
# 		puts "Your last name is #{@last_name.capitalize}."
# 	end

# end

# last_name = "Dirks"
# dad = Father.new(last_name)
# dani = Daughter.new(last_name)
# dad.last_name
# dani.last_name


# class Father
# 	attr_accessor :last_name
	
# 	def initialize(last_name)
# 		@last_name = last_name
# 	end
	
# 	def last_name
# 		puts "Your last name is #{@last_name.capitalize}."
# 	end

	
# end

# class Daughter < Father

# 	def last_name
# 		super
# 		@last_name = "P"
# 		puts "Your last name is #{@last_name.capitalize}."
# 	end
# end

# last_name = "Dirks"
# dad = Father.new(last_name)
# dani = Daughter.new(last_name)
# dad.last_name
# dani.last_name

class Father
	attr_accessor :last_name
	
	def initialize(last_name)
		@last_name = last_name
	end
	
	def last_name
		puts "Your last name is #{@last_name.capitalize}."
	end

	
end

class Daughter

	def initialize()
		@dani = Father.new()
	end

	def last_name
		@dani.last_name
	end
end

last_name = "Dirks"
dani = Daughter.new
dani.last_name