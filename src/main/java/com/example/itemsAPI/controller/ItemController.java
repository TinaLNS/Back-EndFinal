package com.example.itemsAPI.controller;

import com.example.itemsAPI.controller.dto.ItemDto;
import com.example.itemsAPI.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import repository.entity.Item;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/item")
public class ItemController{

    @Autowired
    public ItemService itemService;


    @GetMapping("/all")
    public List<Item> getItems(){
        return ItemService.all();
    }

    @PostMapping("/add")
    public Item save( @RequestBody ItemDto itemDto )
    {
        return itemService.save( new Item( itemDto ) );
    }

    @GetMapping("/find/{id}")
    public Optional<Item> findItemById(@PathVariable Integer id){
        return itemService.findById(id);
    }


    @PutMapping( "/update/{id}" )
    public Item update( @RequestBody ItemDto itemDto, @PathVariable Integer id )
    {
        Optional<Item> temp = itemService.findById( id );
        Item item = temp.get();
        item.setName( itemDto.getName() );
        item.setDescription( itemDto.getDescription() );
        item.setImage_url( itemDto.getImage_url() );
        item.setPrice(itemDto.getPrice() );
        return itemService.save( item );
    }


    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id)
    {
        itemService.delete(id);
    }

}