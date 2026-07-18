package db

type Storage struct{ // Faclitates the dependency injection of the repositories

	UserRepository UserRepository

}


func NewStorage() *Storage {
	return &Storage{
		UserRepository: &UserRepositoryImpl{},
	}
}