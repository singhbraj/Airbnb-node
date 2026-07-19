package services

import (
	db "AuthInGo/db/repositories"
	"AuthInGo/utils"
	"fmt"
)

type UserService interface {
	GetUserById() error
	CreateUser() error
	LoginUser() error
}

type UserServiceImpl struct {
	userRepository db.UserRepository
}

func NewUserService(_userRepository db.UserRepository) UserService {

	return &UserServiceImpl{
		userRepository: _userRepository,
	}

}

func (u *UserServiceImpl) GetUserById() error {
	fmt.Println("Creating user in user service")
	u.userRepository.GetById()
	return nil
}

func (u *UserServiceImpl) CreateUser() error {
	fmt.Println("Creating user in user service")
	password := "password_example@123"
	hashedPassword, err := utils.HashPassword(password)
	if err != nil {
		return err
	}

	u.userRepository.Create("username_example1", "email12_example@example.com", hashedPassword)
	return nil
}

func (u *UserServiceImpl) LoginUser() error {
	fmt.Println("Login user in user service")
	response := utils.CheckPasswordHash("password_example@123", "$2a$10$p0WfnfeLTeYzd2oyzHMSYOqyFs6Uaei/8HO8KkZauus4oa2kOY5EK")

	fmt.Println("Login response: ", response)
	return nil
}