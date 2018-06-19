10.times do
    Post.create(
        author: Faker::Dune.character ,
        body: Faker::FamilyGuy.quote ,
    )
end

puts 'seeded beeotch!'