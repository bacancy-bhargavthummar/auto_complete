Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'information#index'
  get 'information/auto_complete' => 'information#auto_complete'
  get 'information/search' => 'information#search'
  post 'information/update_sort' => 'information#update_sort'
  post 'information/new' => 'information#new'
end
